import React from 'react';
import { action } from '@storybook/addon-actions';
import Sticky from './../components/Sticky'
import Layout from './../components/Layout'

export default {
  title: 'Sticky',
  component: Sticky,
};

export const Text = () => {
    return (
        <div>
            <h1>title</h1>
            <h1>title</h1>
            <h1>title</h1>
            <Sticky>
                <div style={{background:'pink', height: '50px'}}>nav1</div>
                <div style={{height:'500px', background: 'purple'}}>content1</div>
            </Sticky>
            <Sticky>
                <div style={{background:'pink', height: '50px'}}>nav2</div>
                <div style={{height:'500px', background: 'purple'}}>content2</div>
            </Sticky>
            <Sticky>
                <div style={{background:'pink', height: '50px'}}>nav3</div>
                <div style={{height:'500px', background: 'purple'}}>content3</div>
            </Sticky>
        </div>
    )
};

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯31232
//     </span>
//   </Button>
// );

