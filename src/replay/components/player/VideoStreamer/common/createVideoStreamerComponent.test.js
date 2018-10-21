import createVideoStreamerComponent from './createVideoStreamerComponent';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const domRender = (Component, props = { source: { streamUrl: 'abc' } }) => {
  return new Promise((resolve, reject) => {
    let element;
    const handleReady = ({ setProperty }) => {
      try {
        element.update();
        const videoElement = element.find('video');
        const videoRef = element.instance().videoRef;
        resolve({
          element,
          setProperty,
          videoElement,
          videoRef,
          domVideoElement: videoElement.getDOMNode()
        });
      } catch (e) {
        reject(e);
      }
    };
    element = mount(<Component {...props} onReady={handleReady} />);
  });
};

test('createVideoStreamerComponent() returns a component using the resolved implementation', () => {
  const eventHandler = () => {};
  const implementation = {
    applyProperties: jest.fn(),
    handleSourceChange: jest.fn(),
    textTrackManager: {
      handleSourceChange: jest.fn()
    },
    audioTrackManager: {
      handleSourceChange: jest.fn()
    },
    startPlaybackSession: jest.fn(),
    videoElementEventHandlers: {
      onLoadedMetadata: eventHandler,
      onEnded: eventHandler
    },
    render: jest.fn(),
    cleanup: jest.fn()
  };
  implementation.handleSourceChange.mockImplementation(() => Promise.resolve());
  implementation.render.mockImplementation(() => <video />);

  const resolveImplementation = jest.fn();
  resolveImplementation.mockImplementation(() => Promise.resolve(implementation));

  const TestVideoStreamer = createVideoStreamerComponent('TestVideoStreamer', resolveImplementation);
  expect(TestVideoStreamer.displayName).toBe('TestVideoStreamer');
  return domRender(TestVideoStreamer).then(({ videoRef, element, setProperty }) => {
    setProperty({ isPaused: true });
    expect(implementation.applyProperties).toHaveBeenCalled();
    expect(implementation.handleSourceChange).toHaveBeenCalled();
    expect(implementation.textTrackManager.handleSourceChange).toHaveBeenCalled();
    expect(implementation.audioTrackManager.handleSourceChange).toHaveBeenCalled();
    expect(implementation.startPlaybackSession).toHaveBeenCalled();
    const lastRenderCall = implementation.render.mock.calls[implementation.render.mock.calls.length - 1];
    expect(lastRenderCall[1]).toEqual({ onLoadedMetadata: eventHandler, onEnded: eventHandler });

    element.unmount();
    expect(implementation.cleanup).toHaveBeenCalled();
  });
});