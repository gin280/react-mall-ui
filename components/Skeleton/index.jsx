import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const Wrapper = styled.div(
  {
    position: 'absolute',
    zIndex: 99999,
    overflow: 'hidden',
    left: 0,
    top: 0,
  },
  props => ({
    width: winWidth,
    height: winHeight,
    backgroundColor: backgroundColor,
  }),
)

const Inner = styled.div(
  {
    position: 'absolute',
    zIndex: 99999,
    overflow: 'hidden',
    borderRadius: 0,
  },
  props => ({
    borderRadius: props.skeletonType == 'circular' && '50%',
    borderRadius: props.skeletonType == 'fillet' && props.borderRadius,
  }),
)

const Loading = styled.div(
  {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 40,
    height: 40,
    background: '0 0',
    borderRadius: '50%',
    border: '2px solid',
    animation: `${keyframes} .7s linear infinite`,
    position: 'fixed',
    zIndex: 999999,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  props => ({
    borderColor: props.type == 1 && '#e5e5e5 #e5e5e5 #e5e5e5 #5677fc',
    borderColor: props.type == 2 && '#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e',
    borderColor:
      props.type == 3 &&
      'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) #fff',
    borderColor: props.type == 4 && '#e5e5e5 #e5e5e5 #e5e5e5 #35b06a',
    borderColor: props.type == 5 && '#e5e5e5 #e5e5e5 #e5e5e5 #fc872d',
    borderColor: props.type == 6 && '#e5e5e5 #e5e5e5 #e5e5e5 #eb0909',
    borderColor: props.type == 7 && '#5677fc transparent #5677fc transparent',
    borderColor: props.type == 8 && '#35b06a transparent #35b06a transparent',
    borderColor: props.type == 9 && '#fc872d transparent #fc872d transparent',
    borderColor: props.type == 10 && '#eb0909 transparent #eb0909 transparent',
  }),
)

const rotate = keyframes`
0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Skeleton = props => {
  // isPreload(init) {
  //     let preloadData = this.preloadData || []
  //     if (preloadData.length) {
  //       init && (this.skeletonElements = preloadData)
  //       return true
  //     }
  //     return false
  //   }

  const [state, setstate] = useState({
    winWidth: 375,
    winHeight: 800,
    skeletonElements: [],
  })

  const selectorQuery = async () => {
    let skeletonType = props.skeletonType || []
    let nodes = []
    for (let item of skeletonType) {
      className = `.${item}`
      if ('rect_circular_fillet'.indexOf(item)) {
        className = `.${props.selector}-${item}`
      }

      let tmpNodes = document.querySelectorAll(className)
      console.info(tmpNodes)
    }
  }

  const isPreload = init

  useEffect(() => {
    selectorQuery()
  }, [])

  return (
    <Wrapper>
      <Inner></Inner>
      {props.isLoading && <Loading></Loading>}
    </Wrapper>
  )
}

export default Skeleton

Skeleton.propTypes = {
  //选择器(外层容器)
  selector: PropTypes.string,
  //外层容器背景颜色
  backgroundColor: PropTypes.string,
  //骨架元素背景颜色
  skeletonBgColor: PropTypes.string,
  //骨架元素类型：矩形，圆形，带圆角矩形["rect","circular","fillet"]
  //默认所有，根据页面情况进行传值
  //页面对应元素class为：tui-skeleton-rect，tui-skeleton-circular，tui-skeleton-fillet
  //如果传入的值不在下列数组中，则为自定义class值，默认按矩形渲染
  skeletonType: PropTypes.array,
  //圆角值，skeletonType=fillet时生效
  borderRadius: PropTypes.string,
  //骨架屏预生成数据：提前生成好的数据，当传入该属性值时，则不会再次查找子节点信息
  preloadData: PropTypes.array,
  //是否需要loading
  isLoading: PropTypes.bool,
  //loading类型[1-10]
  loadingType: PropTypes.number,
}

Skeleton.defaultProps = {
  selector: 'tui-skeleton',
  backgroundColor: '#fff',
  skeletonBgColor: '#e9e9e9',
  skeletonType: ['rect', 'circular', 'fillet'],
  borderRadius: '16px',
  preloadData: [],
  isLoading: true,
  loadingType: 1,
}
