<template>
    <div class="total">
        <div class="header">
            <h4>慕课外卖用户总数</h4>
            <h5>User Total Count</h5>
            <h1>1,739,919</h1>
            <p>每日增长率:73.90% <span>每月增长率:117.37%</span></p>
            <div class="m-progress" :style="`width:${width}px;`">
                <div class="m-progress-outer">
                    <div class="m-progress-inner">
                        <div :class="['u-progress-bg', { 'u-success-bg': progress >= 100 }]"
                            :style="`width: ${progress >= 100 ? 100 : progress}%; height: ${strokeWidth}px;`"></div>
                    </div>
                </div>
                <template v-if="showInfo"></template>
                <svg class="u-success" v-if="progress >= 100" viewBox="64 64 896 896" data-icon="check-circle"
                    aria-hidden="true" focusable="false">
                    <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
                    </path>
                </svg>
            </div>
        </div>
        <div style="width:100%;height: 5px; background-color: #2a2b2d;"></div>
        <div style="width:100%;height: 5px; background-color: #424345;"></div>
        <div class="age">
            <div class="one">
                <div class="oneLeft">
                    <p>慕课外卖用户年龄分布&平均年龄</p>
                    <h6>Distribution Of Age</h6>
                </div>
                <div class="oneRight">
                    30.08<span>岁</span>
                </div>
            </div>
            <div class="center"><img src="../../img/age.png"></div>
            <div class="bottom">
                <div class="one-tow">
                    <h3>304,378</h3>
                    <div class="ages">
                        <span class="a"></span>0-20
                    </div>
                </div>
                <div class="one-tow">
                    <h3>505,391</h3>
                    <div class="ages">
                        <span class="b"></span>20-30
                    </div>
                </div>
                <div class="one-tow">
                    <h3>725,216</h3>
                    <div class="ages">
                        <span class="c"></span>30-50
                    </div>
                </div>
                <div class="one-tow">
                    <h3>204,934</h3>
                    <div class="ages">
                        <span class="d"></span>>50
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        width: { // 进度条总宽度
            type: Number,
            default: 600
        },
        progress: { // 当前进度
            type: Number,
            default: 73.90
        },
        strokeWidth: { // 进度条线的宽度
            type: Number,
            default: 8
        },
        showInfo: { // 是否显示进度数值或状态图标
            type: Boolean,

        }
    },
}

</script>

<style lang="scss" scoped>
.total {
    width: 100%;
    background-color: #1c1c1c;
    color: #fff;
    height: 700px;
    font-weight: 400;
    padding: 5px;
}

.header {
    background-color: #424345;
    height: 140px;
    padding: 10px 15px 10px 15px;
    box-sizing: border-box;

    h4 {
        font-size: 16px;
    }

    h5 {
        font-size: 8px;
        margin: 5px 0;
    }

    h1 {
        margin: 4px 0;
    }

    p {
        color: #b4cc80;
        font-size: 12px;

        span {
            color: #52C41A;
            margin-left: 5px;
        }
    }
}

.age {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px 10px 15px;
    background-color: #2a2b2d;
    height: 150px;

    .one {
        display: flex;

        .oneLeft {
            p {
                font-size: 13px;
                font-weight: 700;
            }

            h6 {
                font-size: 10px;
            }
        }

        .oneRight {
            font-size: 35px;
            font-weight: 700;
            margin-left: 13px;

            span {
                font-weight: 400;
                font-size: 12px;
            }
        }
    }

    .center {
        width: 320px;
        margin-top: 10px;

        img {
            width: 100%;

        }
    }

    .bottom {
        display: flex;

        .one-tow {
            flex: 1;

            text-align: center;

            h3 {
                font-size: 16px;
            }

            .ages {
                line-height: 12px;

                .a {
                    line-height: 12px;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: #52C41A;
                    margin-right: 3px;
                }

                .b {
                    line-height: 12px;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: #c4ef76;
                    margin-right: 3px;
                }

                .c {
                    line-height: 12px;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: #c9f192;
                    margin-right: 3px;
                }

                .d {
                    line-height: 12px;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: #f9fb9d;
                    margin-right: 3px;
                }

                text-align: center;
                font-size: 12px;
            }
        }
    }
}

.m-progress {
    height: 24px;
    margin: 0 auto;
    display: flex;

    .m-progress-outer {
        width: 320px;

        .m-progress-inner {
            display: inline-block;
            width: 100%;
            background: #424345;
            // border-radius: 100px;
            border: 1px solid #ccc;

            .u-progress-bg {
                background: #929395;
                transition: all .3s cubic-bezier(.08, .82, .17, 1);
            }

            .u-success-bg {
                background: #929395;
            }
        }
    }

    .u-success {
        width: 16px;
        height: 16px;
        fill: #52C41A;
        margin-left: 8px;
        margin-top: 4px;
    }

    .u-progress-text {
        font-size: 16px;
        line-height: 24px;
        margin-left: 8px;
        color: rgba(0, 0, 0, .45);
    }
}
</style>