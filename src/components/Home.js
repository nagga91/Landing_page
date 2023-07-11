import React from 'react'
import {Button,UncontrolledTooltip,UncontrolledAccordion,AccordionBody,AccordionHeader,AccordionItem, Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay, CardLink, CardFooter,} from 'reactstrap';
import { TfiReload } from 'react-icons/tfi';
import Sliders from './Sliders';

function Home({data}) {
  console.log(data)
  return (
    <div >
        <div style={{marginTop:"5%",display:'flex',marginLeft:'5%'}}>
        <h2 >Find what you need</h2>
        </div>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <div style={{marginLeft:'4%',marginRight:'2%',width: "18rem"}}>
            <div style={{display:"flex",justifyContent:'space-between'}}>
                <h6 style={{}}>Refine</h6>
                <Button className="btn-round btn-icon" id='top' color="neutral" >
                <TfiReload style={{color:"black"}}/>
                </Button>
                <UncontrolledTooltip style={{backgroundColor:'white'}} placement="top" target="top" delay={0}>
                Reset Filter
                </UncontrolledTooltip>
            </div>
            <div>
            <UncontrolledAccordion defaultOpen="1">
  <AccordionItem >
    <AccordionHeader targetId="1">
      PRICE RANGE
    </AccordionHeader>
    <AccordionBody accordionId="1">
      <Sliders/>
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="2">
      CLOTHING
    </AccordionHeader>
    <AccordionBody accordionId="2">
      <strong>
        This is the second item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="3">
      DESIGNER
    </AccordionHeader>
    <AccordionBody accordionId="3">
      <strong>
        This is the third item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="4">
      COLOUR
    </AccordionHeader>
    <AccordionBody accordionId="4">
      <strong>
        This is the third item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
</UncontrolledAccordion>
    </div>
        </div>
  <div style={{}}> 
  {data.map((el,index)=>
    <Card key={index} style={{ width: "18rem",margin: '0.5rem' }}>
    <CardImg
      alt="Card image cap"
      src={el.imageUrl}
      top
      width="100%"
      style={{height:'200px'}}
    />
    <CardBody >
    <CardTitle tag="h5">
      {el.title}
      </CardTitle>
      <CardText>
      Impeccably tailored in Italy from lightweight navy wool.
      </CardText>
      <CardText>
      <div style={{display:'flex'}}>
        <span>Prix £</span>
        <button className="btn btn-primary btn-icon btn-round" style={{marginLeft:'60%'}}>
          <i className="now-ui-icons ui-2_favourite-28"></i>
        </button>
      </div>
      </CardText>
    </CardBody>
  </Card>
  )}   
  
  <Card style={{ width: "18rem",margin: '0.5rem' }}>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
      style={{height:'200px'}}
    />
    <CardBody style={{position:'relative'}}>
      <CardTitle tag="h5">
      Polo Ralph Lauren
      </CardTitle>
      <CardText>
      Impeccably tailored in Italy from lightweight navy wool.
      </CardText>
      <CardText>
      <div style={{display:'flex'}}>
        <span>Prix £</span>
        <button className="btn btn-primary btn-icon btn-round" style={{marginLeft:'60%'}}>
  <i className="now-ui-icons ui-2_favourite-28"></i>
</button>
      </div>
      </CardText>
      
    </CardBody>
    
  </Card>
  <Card style={{ width: "18rem",margin: '0.5rem' }}>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
      style={{height:'200px'}}
    />
    <CardBody>
    <CardTitle tag="h5">
      Polo Ralph Lauren
      </CardTitle>
      <CardText>
      Impeccably tailored in Italy from lightweight navy wool.
      </CardText>
      <CardText>
      <div style={{display:'flex'}}>
        <span>Prix £</span>
        <button className="btn btn-primary btn-icon btn-round" style={{marginLeft:'60%'}}>
  <i className="now-ui-icons ui-2_favourite-28"></i>
</button>
      </div>
      </CardText>
    </CardBody>
  </Card>
    </div>
        
  </div>
      <div>
      <button className="btn btn-primary btn-round">Load more...</button>
      </div>
      <div style={{marginTop:"5%",display:'flex',marginLeft:'5%'}}>
        <h2 >News in fashion</h2>
        </div>
        {/*div news in fashions image overlays */ }
      <div style={{display:'flex', flexWrap:'wrap'}}>
      <Card className="bg-dark" style={{width:'35rem'}}>
        <CardImg
          alt="..."
          src="https://picsum.photos/900/270?grayscale"
          style={{height:'500px'}}
        ></CardImg>
        <CardImgOverlay style={{marginTop:'30%',textAlign: 'left'}}>
          
          <CardLink href='#' style={{fontSize:'2rem', color: 'white', textDecoration: 'underline' }}>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardLink>
          <br/>
          <br/>
          <CardText style={{color:'white'}}>Last updated 3 mins ago</CardText>
        </CardImgOverlay>
      </Card>
      <Card className="text-center" style={{width:'20rem'}}>
        <CardBody style={{marginTop:'30%'}}>

          <CardLink href='#' style={{fontSize:'1.5rem', color: 'black', textDecoration: 'underline' }}>
            With supporting text below as a natural lead-in to additional
            content.
          </CardLink>
          
        </CardBody>
        <CardFooter className="text mb-2" style={{marginTop:'60%',color:'black'}}>2 days ago</CardFooter>
      </Card>
      <Card className="bg-dark" style={{width:'23rem',}}>
        <CardImg
          alt="..."
          src="https://picsum.photos/900/270?grayscale"
          style={{height:'500px'}}
        ></CardImg>
      </Card>
      </div> 
      <div style={{marginTop:"5%",display:'flex',marginLeft:'5%'}}>
        <h2 >Latest Offers</h2>
        </div>
        <div style={{}}>    
  <Card style={{ width: "22rem",margin: '0.5rem' }}>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
      style={{height:'200px'}}
    />
    <CardBody >
    <CardTitle tag="h5">
      Polo Ralph Lauren
      </CardTitle>
      <CardText>
      Impeccably tailored in Italy from lightweight navy wool.
      </CardText>
      <CardText>
      <div style={{display:'flex'}}>
      <span style={{ textDecoration: 'line-through' }}>£200</span>
        <p style={{color:'OrangeRed'}}>£100</p>
        <button className="btn btn-primary btn-icon btn-round" style={{marginLeft:'60%'}}>
        <i className="now-ui-icons ui-2_favourite-28"></i>
        </button>
      </div>
      </CardText>
    </CardBody>
  </Card>
  <Card style={{ width: "22rem",margin: '0.5rem' }}>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
      style={{height:'200px'}}
    />
    <CardBody style={{position:'relative'}}>
      <CardTitle tag="h5">
      Polo Ralph Lauren
      </CardTitle>
      <CardText>
      Impeccably tailored in Italy from lightweight navy wool.
      </CardText>
      <CardText>
      <div style={{display:'flex'}}>
        <span style={{ textDecoration: 'line-through' }}>£200</span>
        <p style={{color:'OrangeRed'}}>£100</p>
        <button className="btn btn-primary btn-icon btn-round" style={{marginLeft:'60%'}}>
          <i className="now-ui-icons ui-2_favourite-28"></i>
        </button>
      </div>
      </CardText>
      
    </CardBody>
    
  </Card>
  <Card style={{ width: "22rem",margin: '0.5rem' }}>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
      style={{height:'200px'}}
    />
    <CardBody>
    <CardTitle tag="h5">
      Polo Ralph Lauren
      </CardTitle>
      <CardText>
      Impeccably tailored in Italy from lightweight navy wool.
      </CardText>
      <CardText>
      <div style={{display:'flex'}}>
      <span style={{ textDecoration: 'line-through' }}>£200</span>
        <p style={{color:'OrangeRed'}}>£100</p>
        <button className="btn btn-primary btn-icon btn-round" style={{marginLeft:'60%'}}>
  <i className="now-ui-icons ui-2_favourite-28"></i>
</button>
      </div>
      </CardText>
    </CardBody>
  </Card>
    </div>
    </div>
  )
}

export default Home
