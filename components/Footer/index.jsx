import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const douFooter = css(
  {
    width: "100%",
    overflow: "hidden",
    padding: "30px 24px",
    boxSizing: "border-box",
    // position: props => props.fixed && "fixed",
    // zIndex: props => props.fixed && 9999,
    // bottom: props => props.fixed && 0
  },
  props => ({ background: props.bgcolor })
);

const douFixed = css({
  position: "fixed",
  zIndex: 9999,
  bottom: 0
});

const douFooterLink = css({
  color: "#596d96",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 28
});

const douLink = css({
  position: "relative",
  padding: "0 18",
  lineHeight: 1,
  "&:before": {
    content: "",
    position: "absolute",
    right: 0,
    top: 0,
    width: 1,
    bottom: 0,
    borderRight: "1px solid #d3d3d3",
    transform: "scaleX(0.5)"
  }
  //   "&:last-child::before": {
  //     borderRight: "0 !important"
  //   }
});

const douLinkHover = css({
  opacity: 0.5
});

const douFooterCopyright = css(
  {
    fontSize: 24,
    color: "#A7A7A7",
    lineHeight: 1,
    textAlign: "center",
    paddingTop: 16
  },
//   props => ({ color: props.color, fontSize: props.size })
);

const Footer = props => {
  return (
    <div css={douFooter}>
      {props.navigate.length > 0 && (
        <div css={douFooterLink}>
          {props.navigate.map((item, index) => (
            <span key={index}>{item.text}</span>
          ))}
        </div>
      )}
      <div css={douFooterCopyright}>{props.copyright}</div>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  //链接设置  数据格式对应上面注释的属性值
  navigate: PropTypes.array,
  //底部文本
  copyright: PropTypes.string,
  //copyright 字体颜色
  color: PropTypes.string,
  //copyright 字体大小
  size: PropTypes.number,
  //footer背景颜色
  bgcolor: PropTypes.string,
  //是否固定在底部
  fixed: PropTypes.bool
};

Footer.defaultProps = {
  navigate: [],
  copyright: "All Rights Reserved.",
  color: "#A7A7A7",
  size: 24,
  bgcolor: "none",
  fixed: true
};
