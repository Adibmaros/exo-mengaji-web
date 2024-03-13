import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function HomePage() {
  const [members, setMembers] = useState([
    { id: 1, name: 'Bibil', juzRead: 'Juz 2', isChecked: false },
    { id: 2, name: 'Peen', juzRead: 'Juz 2', isChecked: false },
    { id: 3, name: 'Iffah', juzRead: 'Juz 3', isChecked: false },
    { id: 4, name: 'Nia', juzRead: 'Juz 4', isChecked: false },
    { id: 5, name: 'Haniyah', juzRead: 'Juz 5', isChecked: false },
    { id: 6, name: 'Wati', juzRead: 'Juz 6', isChecked: false },
    { id: 7, name: 'Fathia', juzRead: 'Juz 7', isChecked: false },
    { id: 8, name: 'Fatih', juzRead: 'Juz 8', isChecked: false },
    { id: 9, name: 'Hadi', juzRead: 'Juz 9', isChecked: false },
    { id: 10, name: 'Adib', juzRead: 'Juz 10', isChecked: false },
    { id: 11, name: 'Mukhlisin', juzRead: 'Juz 11', isChecked: false },
    { id: 12, name: 'Razan', juzRead: 'Juz 12', isChecked: false },
    { id: 13, name: 'Bintang', juzRead: 'Juz 13', isChecked: false },
    { id: 14, name: 'Alif', juzRead: 'Juz 14', isChecked: false },
    { id: 15, name: 'Ali', juzRead: 'Juz 15', isChecked: false },
    { id: 16, name: 'Syauqi', juzRead: 'Juz 1', isChecked: false }
]
);

  const totalSelesai = members.filter(member => member.isChecked).length;
  const totalAnggota = members.length;
  const persentaseSelesai = totalAnggota > 0 ? (totalSelesai / totalAnggota) * 100 : 0;

  const persentaseSpring = useSpring({ number: persentaseSelesai });

  const handleCheckboxChange = (id) => {
    setMembers(prevMembers =>
      prevMembers.map(member =>
        member.id === id ? { ...member, isChecked: !member.isChecked } : member
      )
    );
  };

  return (
    <div className='homepage'>
      {/* Bagian Header */}
      <header className='w-100 min-vh-100'>
        <Container>
          <Row style={{ paddingTop: '140px' }} className='header-box text-center d-flex justify-content-center'>
            <Col lg='6'>
              <h1 style={{ marginBottom: '50px', lineHeight: '40px' }} className="shadow-sm p-2">Agar <i>Pahala</i> tak terputus <br /> <span> Tadarus dulu</span> <br /> Satu juz😍</h1>
              <p className="mb-4">“Barangsiapa yang berpuasa Ramadan atas dasar <i>iman </i>dan semata-mata <i>mengharap pahala</i> dari Allah SWT, maka akan diampuni dosanya yang telah lalu.” <br /> <br /> <span className='text-center pt-3'><strong >– HR. Bukhari</strong></span></p>
              <div className='gap-4'>
                <button className="btn btn-success btn-lg rounded-1 me-2 shadow">Donasi</button>
                <button className="btn btn-outline-success btn-lg rounded-1 shadow">Hadits Harian</button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Bagian 2 */}
      <div className='setoran w-100 min-vh-100'>
        <Container>
        <Row>
            <Col className="text-center mt-4">
            <h1 className='text-center mx-auto py-3'>Daftar Progress <i>Bacaan</i> <br />
                Anggota <strong>Exo Mengaji</strong></h1>
              <h5 className='mb-3 text-danger'>Persentase Selesai : </h5>
              <strong style={{fontSize : '30px'}}>
              <animated.p style={persentaseSpring}>{persentaseSpring.number.to(value => `${value.toFixed(2)}%`)}</animated.p></strong>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              
              <table className="table-striped">
                <thead className='bg-succes-subtle text-center'>
                  <tr >
                    <th>Nama</th>
                    <th>Juz yang Dibaca</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody style={{marginInline : 'auto'}}>
                  {members.map((member, index) => (
                    <tr key={member.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                      <td className='text-center'><strong>{member.name}</strong></td>
                      <td className='text-center'>{member.juzRead}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={member.isChecked}
                          onChange={() => handleCheckboxChange(member.id)}
                        />
                        {member.isChecked ? "Selesai" : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
          {/* Tambahkan persentase selesai di bawah tabel */}
          
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
