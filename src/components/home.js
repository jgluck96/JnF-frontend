import React from 'react'
import NavBar from './NavBar'
import CarCard from './carCard'

class Home extends React.Component {

  state ={
    start: 0,
    end: 5
  }


  render(){
    return(
      <div className="home">
      <br/>
      <br/>
      <br/>
        <h1>Welcome To JnF-Books</h1>
        <h3>All readers are welcome, please browse through our inventory</h3>
        <div className='homecar'>
        <label className='carLabel'>Most Popular</label>
          <div className='prevBtnCont' onClick={() => this.setState({start: this.state.start -5,end: this.state.end -5 })}>
            <div className='prevBtn'></div>
          </div>
          <div className='carcont'>
          {this.props.books.map(bookObj => {
            return <CarCard bookShow={this.props.bookShow} key={bookObj.id} book={bookObj}/>
          }).slice(this.state.start,this.state.end)}
          </div>
          <div className='nxtBtnCont' onClick={() => this.setState({start: this.state.start +5,end: this.state.end +5 })}>
            <div className='nxtBtn'></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
