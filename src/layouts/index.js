import styles from './index.css';

function BasicLayout(props) {
	return (
		<div style={{textAlign:'center'}}>
		<h1>Bilibili av号⇔BV号转换器</h1>
		<h5>算法来源<a href='https://www.zhihu.com/answer/1099438784'>mcfx@Zhihu</a> JS实现<a href='https://github.com/liziyi0914/av2BV'>liziyi0914/av2BV</a></h5>
		<div style={{margin: '1em'}}>{props.children}</div>
		</div>
	);
}

export default BasicLayout;
