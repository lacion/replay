// @flow
import * as React from 'react';
import type { RenderMethod } from '../components/player/PlayerController/PlayerController';
import type { GraphicResources, PlayerConfiguration, StringResources, UIResources } from './types';
import { defaultClassNamePrefix } from '../components/common';

// Non-connected controls
import ControlsBar from '../components/controls/ControlsBar/ControlsBar';
import FullscreenButton from '../components/controls/FullscreenButton/FullscreenButton';
import ExitButton from '../components/controls/ExitButton/ExitButton';

// Connected controls
import PlaybackMonitor from '../components/controls/PlaybackMonitor/PlaybackMonitor';
import {
  AudioSelector,
  BufferingIndicator,
  GotoLiveButton,
  PlayerUIContainer,
  PlayPauseButton,
  QualitySelector,
  SkipButton,
  SubtitlesSelector,
  TimeDisplay,
  Timeline,
  Volume
} from '../components/player/PlayerController/connectedControls';

import { ControlledVideoStreamer } from '../components/player/PlayerController/connectControl';

const getSkipBackOffset = (conf: PlayerConfiguration) => conf && conf.ui && conf.ui.skipButtonOffset;
const getLiveDisplayMode = (conf: PlayerConfiguration) => conf && conf.ui && conf.ui.liveDisplayMode;
const getQualitySelectionStrategy = (conf: PlayerConfiguration) =>
  conf && conf.ui && conf.ui.qualitySelectionStrategy;

// In this file, all custom parts making up a player UI are assembled. Create a copy for assembling custom player UIs.

const getPlayerUIRenderer = (graphics: UIResources<GraphicResources>, strings: UIResources<StringResources>, classNamePrefix?: string = defaultClassNamePrefix) => {
  const renderPlayerUI: RenderMethod = ({ configuration, externalProps }) => (
    <PlayerUIContainer
      classNamePrefix={classNamePrefix}
      configuration={configuration}
      render={({ fullscreenState }) => (
        <React.Fragment>
          <ControlledVideoStreamer classNamePrefix={classNamePrefix} />
          {externalProps &&
          externalProps.onExit && (
            <ExitButton {...strings.exitButton} {...graphics.exitButton} onClick={externalProps.onExit} classNamePrefix={classNamePrefix} />
          )}
          <PlaybackMonitor
            configuration={configuration}
            closeButtonContent={graphics.playbackMonitor && graphics.playbackMonitor.closeButtonContent}
          />
          <ControlsBar>
            <PlayPauseButton {...strings.playPauseButton} {...graphics.playPauseButton} classNamePrefix={classNamePrefix} />
            <SkipButton offset={getSkipBackOffset(configuration)} {...strings.skipButton} {...graphics.skipButton} classNamePrefix={classNamePrefix} />
            <Timeline {...strings.timeline} {...graphics.timeline} classNamePrefix={classNamePrefix} />
            <TimeDisplay liveDisplayMode={getLiveDisplayMode(configuration)} {...strings.timeDisplay} classNamePrefix={classNamePrefix} />
            <GotoLiveButton {...strings.gotoLiveButton} {...graphics.gotoLiveButton} classNamePrefix={classNamePrefix} />
            <Volume {...strings.volume} {...graphics.volume} />
            <AudioSelector {...strings.audioSelector} {...graphics.audioSelector} classNamePrefix={classNamePrefix} />
            <SubtitlesSelector {...strings.subtitlesSelector} {...graphics.subtitlesSelector} classNamePrefix={classNamePrefix} />
            <QualitySelector
              {...strings.qualitySelector}
              {...graphics.qualitySelector}
              selectionStrategy={getQualitySelectionStrategy(configuration)}
              classNamePrefix={classNamePrefix}
            />
            <FullscreenButton {...fullscreenState} {...strings.fullscreenButton} {...graphics.fullscreenButton} classNamePrefix={classNamePrefix} />
          </ControlsBar>
          <BufferingIndicator {...strings.bufferingIndicator} {...graphics.bufferingIndicator} classNamePrefix={classNamePrefix} />
        </React.Fragment>
      )}
    />
  );
  return renderPlayerUI;
};

export default getPlayerUIRenderer;
