import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createVideoStreamerResolver } from './VideoStreamerResolver';

Enzyme.configure({ adapter: new Adapter() });

const mockSelectLazyVideoStreamer = () => () => <div>Video streamer</div>;
const mockSelectCompatibleStream = source => source.alternativeStreamResources[0];

const mockSimpleSource = {
  streamUrl: 'https://example.com/video.mp4',
  contentType: 'video/mp4',
  startPosition: 123
};
/*const mockMultiTechSource = {
  alternativeStreamResources: [
    {
      streamUrl: 'https://example.com/stream.mpd',
      contentType: 'application/dash+xml'
    },
    {
      streamUrl: 'https://example.com/stream.m3u8',
      contentType: 'application/x-mpegurl'
    }
  ],
  startPosition: 123
};*/

test.skip('VideoStreamerResolver renders a selected video streamer when a source is specified.', () => {
  const VideoStreamerResolver = createVideoStreamerResolver(mockSelectCompatibleStream, mockSelectLazyVideoStreamer);
  // TODO: Revisit and complete test writing when Suspense is supported in Enzyme and ReactDOMServer.
  const rendered = mount(<VideoStreamerResolver source={mockSimpleSource} />);
  expect(
    rendered
      .find('div')
      .get(0)
      .text()
  ).toBe('Video streamer');
});
test('VideoStreamerResolver renders null when a source is not specified.', () => {});
test('VideoStreamerResolver renders a video streamer when a single source is constructed from alternative stream resources selection.', () => {});
test('VideoStreamerResolver merges the selected stream resource from alternative stream resources into the original source object.', () => {});
test('VideoStreamerResolver renders null and invokes onPlaybackError() when a compatible resource could not be selected from alternative stream sources', () => {});
