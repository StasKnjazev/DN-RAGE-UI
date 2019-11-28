import React from 'react';

class SliderArrow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
          <div className="box-change">
            <span className="box-title">{this.props.title}</span>
            <div className="box-in-change">
              <div className="arrow-change left-arrow" onClick={() => this.props.clickLeftArrow(this.props.index)}></div>
              <div className="label-change">{this.props.name_array[this.props.index_help] !== undefined ? this.props.name_array[this.props.index_help] : this.props.name_array + "%"}</div>
              <div className="arrow-change right-arrow" onClick={() => this.props.clickRightArrow(this.props.index)}></div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
export default SliderArrow;
