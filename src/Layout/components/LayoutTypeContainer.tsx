import { Flex } from 'antd';
import { ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';
import { LayoutTypeEnum } from '..';
import { getPrefixCls } from '../../theme';
import { useStyle } from './../style';

type LayoutTypeContainerProps = {
  pannels: ReactNode[];
  headerandfooter: ReactNode[];
  type: LayoutTypeEnum;
};

const LayoutTypeContainer = (props: LayoutTypeContainerProps) => {
  const prefixCls = getPrefixCls('layout');
  const { styles } = useStyle(prefixCls);

  const { type, pannels, headerandfooter, ...rest } = props;

  const [LeftPannelDom, RightPannelDom, BottomPannelDom, CenterPannelDom] = pannels;
  const [HeaderDom, FooterDom] = headerandfooter;

  console.log('type', type);

  if (type === 'Left&Right') {
    return (
      <Flexbox className={styles.layout} {...rest}>
        {HeaderDom}
        <Flex className={styles.container}>
          {LeftPannelDom}
          <Flex vertical flex={1}>
            {CenterPannelDom}
            {BottomPannelDom}
          </Flex>
          {RightPannelDom}
        </Flex>
        {FooterDom}
      </Flexbox>
    );
  }

  if (type === 'LeftFull') {
    return (
      <Flexbox className={styles.layout} {...rest}>
        {HeaderDom}
        <Flex className={styles.container}>
          {LeftPannelDom}
          <Flex vertical flex={1}>
            <Flex flex={1}>
              {CenterPannelDom}
              {RightPannelDom}
            </Flex>
            {BottomPannelDom}
          </Flex>
        </Flex>
        {FooterDom}
      </Flexbox>
    );
  }

  if (type === 'RightFull') {
    return (
      <Flexbox className={styles.layout} {...rest}>
        {HeaderDom}
        <Flex className={styles.container}>
          <Flex vertical flex={1}>
            <Flex flex={1}>
              {LeftPannelDom}
              {CenterPannelDom}
            </Flex>
            {BottomPannelDom}
          </Flex>
          {RightPannelDom}
        </Flex>
        {FooterDom}
      </Flexbox>
    );
  }

  return (
    <>
      <Flexbox className={styles.layout} {...rest}>
        {HeaderDom}
        <Flex className={styles.container}>
          {LeftPannelDom}
          {CenterPannelDom}
          {RightPannelDom}
        </Flex>
        {BottomPannelDom}
        {FooterDom}
      </Flexbox>
    </>
  );
};

export { LayoutTypeContainer };
