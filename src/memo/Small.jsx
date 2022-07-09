import { memo } from 'react';

export const Small = memo(({ value }) => {

    console.log(`Again... me!`);

  return (
    <small>{ value }</small>
  )
})