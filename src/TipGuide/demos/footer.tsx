import { TipGuide } from '@ant-design/pro-editor';

import { Button, Space } from 'antd';
import { useState } from 'react';

export default () => {
  const guideKey = 'DEMO_KEY';
  const [open, setOpen] = useState(true);

  return (
    <TipGuide
      guideKey={guideKey}
      open={open}
      placement="right"
      footerRender={() => {
        return (
          <Space>
            <Button type="primary" disabled>
              Clear
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>
          </Space>
        );
      }}
      title={'This Is Footer Render Demo !'}
    >
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </Button>
    </TipGuide>
  );
};
