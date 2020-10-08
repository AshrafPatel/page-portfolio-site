export class BootstrapCarousel extends Component {    
    render() {       
        return (    
            <div>
                <div class='container-fluid' >
                    <div className="row title" style={{ marginBottom: "    px" }} >
                    <div class="col-sm-     btn btn-warning">How To Use Bootstrap Carousel In ReactJS</div>      
                    </div>      
                        </div>      <div className='container-fluid' >      <Carousel>      <Carousel.Item style={{'height':"      px"}} >      <img style={{'height':"      px"}}      className="d-block w-      "      src={'assets/img/img  .jpg'} />      <Carousel.Caption>      <h  >First Demo </h  >      </Carousel.Caption>      </Carousel.Item >      <Carousel.Item style={{'height':"      px"}}>      <img style={{'height':"      px"}}      className="d-block w-      "      src={'assets/img/img  .jpg'} />      <Carousel.Caption>      <h  >Second Demo</h  >      </Carousel.Caption>      </Carousel.Item>      <Carousel.Item style={{'height':"      px"}}>      <img style={{'height':"      px"}}      className="d-block w-      "      src={'assets/img/img  .jpg'} />      <Carousel.Caption>      <h  >Third Demo</h  >      </Carousel.Caption>      </Carousel.Item>      </Carousel>      </div>      </div>      )      }      }           export default BootstrapCarousel 