import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Skills.css"

function Skills() {
  let arr1 = [
    {
      skillname: "React",
      imageurl:
        "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png",
    },
    {
      skillname: "Node",
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqgggDt9jASqomckjouqLosDMKzj9WFufKg&s",
    },
    {
      skillname: "HTML",
      imageurl:
        "https://www.cnet.com/a/img/resize/6f59de6f421aca65461420ada94716b37c756c87/hub/2011/01/18/8d118cb0-fdc0-11e2-8c7c-d4ae52e62bcc/HTML5-wow.png?auto=webp&fit=crop&height=675&width=1200",
    },
    {
      skillname: "JavaScript",
      imageurl:
        "https://jbstechinfo.com/wp-content/uploads/2023/08/JavaScript-Symbol.png",
    },
    {
      skillname: "GitHub",
      imageurl:
        "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
    },
    {
      skillname: "Visual Studio Code",
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOU4hIRB20Oy0barVYD6x4N8hQa5QOW7Www&s",
    },
    {
      skillname: "Vercel",
      imageurl:
      "https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg"
    },
    {
      skillname: "Netlify",
      imageurl:
      "https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv9z5e3rvc27uy2a43huc.jpg"
    }
  ];
  return (
    <div id="skills" className="skills">
      <Row xs={8} md={8} className="g-8">
        {arr1.map((skill, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={skill.imageurl} />
              <Card.Body>
                <Card.Title>{skill.skillname}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Skills;
