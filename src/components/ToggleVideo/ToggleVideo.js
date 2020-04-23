/**
 * Copyright (c) [2020] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import React from 'react';
import { actionCreators as participantsActions } from '../../state/ducks/participants';
import { useDispatch } from 'react-redux';
import { Video, VideoOff } from 'react-feather';

function ToggleVideo({ video }) {
  const dispatch = useDispatch();
  const Icon = video ? Video : VideoOff;
  const label = video ? 'Switch Video Off' : 'Switch Video On';

  return (
    <button
      title={label}
      aria-label={label}
      onClick={() => dispatch(participantsActions.toggleVideo())}>
      <Icon />
    </button>
  );
}

export default ToggleVideo;
