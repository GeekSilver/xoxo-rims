import React, { Component } from 'react'
import { postRimAction } from '../../actions/rimAction'
import { connect } from 'react-redux'
import FormData from 'form-data'


class RimForm extends Component {
  constructor(props) {
    super(props)
    this.formData = new FormData()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.formData.append('name', document.getElementById('rim-name').value)
    this.formData.append('size', document.getElementById('rim-size').value)
    this.formData.append('color', document.getElementById('rim-color').value)
    this.formData.append('price', document.getElementById('rim-price').value)
    this.formData.append('image', document.getElementById('rim-image').files[0])
    this.props.postRimAction(this.formData).then((boolVal) => {
      console.log(`this is : ${boolVal}`)

      if (boolVal) {
        document.getElementById('hidden-error').classList.add('d-none')
        document.getElementById('hidden-success').classList.remove('d-none')
      }
      else {
        document.getElementById('hidden-success').classList.add('d-none')
        document.getElementById('hidden-error').classList.remove('d-none')
      }
    })


  }

  render() {
    return (
      <div className="container">
        <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
          <div id="hidden-error" className="row d-none">
            <div className="text-danger col-8 offset-2">
              Encountered an error adding Rim
          </div>
          </div>
          <div id="hidden-success" className="row d-none">
            <div className="text-success col-8 offset-2">
              Rim Added successfully
          </div>
          </div>

          <div className="form-group">
            <label htmlFor="rim-name">Rim Name</label>
            <input type="text" id="rim-name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="rim-size">Rim Size</label>
            <input type="text" id="rim-size" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="rim-price">Rim Price</label>
            <input type="text" id="rim-price" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="rim-color">Rim Color</label>
            <input type="text" id="rim-color" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="rim-image">Rim Image</label>
            <input type="file" id="rim-image" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Add RIm</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    created: state.postRimReducer.created
  }
}
const mapDispatchToProps = {
  postRimAction
}

export default connect(mapStateToProps, mapDispatchToProps)(RimForm)

