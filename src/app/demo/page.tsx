export default async function Page() {
	return (
		<>
			<meta name="author" content="gt7" />
			<div>bilibili player</div>

			<iframe
				title="bilibili player offical"
				src="//www.bilibili.com/blackboard/html5mobileplayer.html?aid=10335022&bvid=BV1nx411m7bV&cid=17072810&page=1"
				width="360"
				height="185"
				scrolling="no"
				border="0"
				frameborder="no"
				framespacing="0"
				autoplay="yes"
				allowfullscreen="true"
			/>

			<iframe
				title="bilibili player unoffical"
				src="//player.bilibili.com/player.html?aid=10335022&bvid=BV1nx411m7bV&cid=17072810&page=1"
				scrolling="no"
				border="0"
				frameborder="no"
				framespacing="0"
				allowfullscreen="true"
				autoplay="true"
				danmaku="no"
				muted="no"
				width="500"
				height="250"
				highQuality="true"
			/>
		</>
	);
}

// 是否自动播放(默认否)：autoplay
// 默认弹幕开关(默认开启)：danmaku
// 是否默认静音(默认否)：muted
// 一键静音按钮是否显示(默认不显示)：hasMuteButton
// 视频封面下方是都显示播放量弹幕量等信息(默认显示)：hideCoverInfo
// 是否隐藏弹幕按钮（默认不隐藏）：hideDanmakuButton
// 是否隐藏全屏按钮(默认显示)：noFullScreenButton
// 是否开始记忆播放(默认开启)：fjw
// 默认开始时间(单位秒，默认0)：t
// 是否显示高清(默认否)：highQuality（无用的，因为除了参数外它还判断了网址是否来自bilibili）
