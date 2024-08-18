import React, { Component } from "react";

class ShopIcon extends Component<React.ComponentProps<"svg">> {
  render() {
    const { ...props } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        fill="none"
        viewBox="0 0 41 41"
        {...props}
      >
        <g clipPath="url(#clip0_150_358)">
          <path
            fill="#1DCF65"
            d="M34.022 28.665a.543.543 0 01-.537.592H7.469a.543.543 0 01-.537-.59L8.796 5.912a.542.542 0 01.538-.5h22.209c.28 0 .513.217.537.498l1.942 22.755z"
          ></path>
          <path
            fill="url(#paint0_linear_150_358)"
            d="M36.099 34.601a.679.679 0 01-.672.738H5.594a.678.678 0 01-.672-.735L7.064 7.347a.677.677 0 01.672-.627h25.46c.35 0 .643.272.672.625l2.23 27.256z"
          ></path>
          <path
            fill="#fff"
            d="M19.923 26.695c-3.883 0-7.042-3.832-7.042-8.542 0-.245.197-.444.44-.444s.44.198.44.444c0 4.22 2.764 7.654 6.162 7.654s6.163-3.434 6.163-7.654c0-.245.197-.444.44-.444s.44.198.44.444c0 4.71-3.16 8.542-7.043 8.542z"
          ></path>
          <path
            fill="#fff"
            d="M24.258 18.034a.436.436 0 01-.31-.13.448.448 0 010-.629l2.278-2.302a.438.438 0 01.622 0l2.257 2.28a.448.448 0 010 .628.437.437 0 01-.622 0l-1.946-1.966-1.968 1.989a.436.436 0 01-.31.13z"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_150_358"
            x1="29.873"
            x2="11.513"
            y1="31.334"
            y2="9.901"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#52D67A"></stop>
            <stop offset="1" stopColor="#5AEE87"></stop>
          </linearGradient>
          <clipPath id="clip0_150_358">
            <path
              fill="#fff"
              d="M0 0H31.16V30.176H0z"
              transform="translate(4.92 5.412)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    );
  }
}

export default ShopIcon;
