import React from 'react'
import{
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
    Navbar,
    Container,
    Form,
    InputGroup,
    InputGroupText,
    Input,
    
  } from "reactstrap";
import DefaultFooter from './DefaultFooter';
function Footer() {
  return (
    <div style={{marginTop:'5%',justifyContent:'center'}}>
      <Card className="bg-dark">
        <CardImg
          alt="..."
          src="https://picsum.photos/318/180"
          style={{height:'400px'}}
        ></CardImg>
        <CardImgOverlay>
          <CardTitle tag="h4" style={{color:'white'}}>Subscribe to our Newsletter</CardTitle>
          <CardText>
          Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
          </CardText>
          <Navbar className="navbar-light bg-neutral" style={{width:'60%',display:'flex',marginLeft:'20%',flexWrap:'wrap'}}>
        <Container >
          <Form className="form-inline mr-auto" data-background-color="black" >
            <InputGroup>
              
                <InputGroupText>
                  <i className="now-ui-icons ui-1_email-85"></i>
                </InputGroupText>
              
              <Input placeholder="Your Email..." type="text"></Input>
            </InputGroup>
            <button class="btn btn-primary">Subscribe</button>
          </Form>
        </Container>
      </Navbar>
        </CardImgOverlay>
      </Card>
      <DefaultFooter/>
    </div>
  )
}

export default Footer
