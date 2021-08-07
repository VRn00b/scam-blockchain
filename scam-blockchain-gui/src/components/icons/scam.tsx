import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as ScamIcon } from './images/scam.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={ScamIcon} viewBox="0 0 150 58" {...props} />;
}
