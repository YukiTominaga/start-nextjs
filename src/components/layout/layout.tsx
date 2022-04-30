import {ReactNode} from 'react';
import styles from './layout.module.scss';
import cn from 'classnames';

interface Props {
  children?: ReactNode;
  type: string;
}

const Layout = ({ children, type }: Props) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
      <p className={cn({
        [styles.red]: type === 'red',
        [styles.blue]: type === 'blue',
      })}>クソザコナメクジ</p>
      <p className={'text-red-100'}>tailwind CSS is GOD!</p>
    </>
  )
}

export default Layout
