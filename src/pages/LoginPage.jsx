import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HomePage from './HomePage'; 
import { useState } from 'react';// Impor halaman HomePage yang akan ditampilkan setelah login berhasil
import '../styles/css/main.css'
import AdminPage from './AdminPage';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInAdmin, setLoggedInAdmin] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi email dan password di sini
    // Jika email dan password sesuai dengan admin, setLoggedIn menjadi true
    if (email === 'exogen' && password === 'member') {
      setLoggedIn(true);
    }
    // Jika email dan password sesuai dengan member, setLoggedIn menjadi true
    else if (email === 'exogen' && password === 'admin123') {
      setLoggedInAdmin(true);
    }

    // Jika tidak sesuai dengan keduanya, tampilkan pesan kesalahan
    else {
      alert('Username atau password kamu salah, coba lagi ya...😊🙏');
    }
  };
  

  // Jika sudah login, tampilkan halaman HomePage
  if (loggedIn) {
    return <HomePage />;
  }

  if (loggedInAdmin) {
    return <AdminPage />;
  }

  return (
    <div className="admin-container">
      <Container className=' w-100 min-vh-100'>
        <Row className=''>
          <Col className='mx-auto ' lg='6'> 
          <h5 style={{ fontFamily : "mono"}} className='text-center fs-4 d-block shadow-sm p-2 bg-success rounded'>Silahkan login😊</h5>
            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-4 pt-4" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Masukkan Username" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-4 pt-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </Form.Group>
              <Button className='mx-auto d-block rounded-1 px-5 fw-bold mt-3' variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
