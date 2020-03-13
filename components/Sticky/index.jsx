import styles from './index.module.scss'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef } from 'react'

const Sticky = props => {
  console.info(props)
  const [isFixed, setIsFixed] = useState(false)
  const ref = useRef(0)
  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        console.info(ref.current.getBoundingClientRect().top)
        let offsetTop = ref.current.getBoundingClientRect().top
        if (offsetTop < 0) {
          setIsFixed(true)
        } else {
          setIsFixed(false)
        }
      }, 0)
    }
    window.addEventListener('scroll', handleScroll, false)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isFixed])

  return (
    <div>
      <div ref={ref}>
        <div className={isFixed ? styles.douStickFixed : null}>
          {props.children[0]}
        </div>
      </div>
      <div>{props.children[1]}</div>
    </div>
  )
}

export default Sticky

// Sticky.propTypes = {
//   scrollTop: PropTypes.number,
//   //吸顶容器距离顶部距离 px
//   stickyTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   //吸顶容器 高度 rpx
//   stickyHeight: PropTypes.string,
//   //占位容器背景颜色
//   bgColor: PropTypes.string,
//   //列表中的索引值
//   index: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
// };

// Sticky.defaultProps = {
//   stickyTop: 44,
//   stickyHeight: "auto",
//   bgColor: "none",
//   index: 0
// };
