import react from 'react';
import {
	Row,
	Col,
	Input,
	Button
} from 'antd';
import B from 'av2bv';

class IndexPage extends react.Component {

	data = {
		av: 0,
		bv: ''
	};

	constructor() {
		super();
		this.state = {
			av: 0,
			bv: ''
		};
	}

	av2bv() {
		this.bvChange(B.av2BV(parseInt(this.state.av)));
	}

	bv2av() {
		this.avChange(B.BV2av(this.state.bv));
	}

	avChange(id) {
		this.setState({av: id});
	}

	bvChange(id) {
		this.setState({bv: id});
	}

	render() {
		return (
		<div style={{textAlign: 'center'}}>
			<Row>
				<Col span={4}>av</Col>
				<Col span={20}><Input onChange={e=>this.avChange(e.target.value)} value={this.state.av}/></Col>
			</Row>
			<div style={{margin:'0.75em'}}>
				<Button onClick={()=>this.av2bv()} style={{marginRight:'1em'}}>⬇</Button>
				<Button onClick={()=>this.bv2av()}>⬆</Button>
			</div>
			<Row>
				<Col span={4}>BV</Col>
				<Col span={20}><Input onChange={e=>this.bvChange(e.target.value)} value={this.state.bv}/></Col>
			</Row>
		</div>
		);
	}

}

export default IndexPage;
