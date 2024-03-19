import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/myphoto.jpg" />

        <Title title="Panuwat Singkaew (Project)">
          <h3 style={{marginTop:"30px"}}>ตำแหน่ง : Network Engineer</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/09/03").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66912363628
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : panuwatpj019@gmail.com</p>
          <p>www.panuwatpj019@gmail.com</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ชื่อเล่น โปรเจค อายุ 21 ศึกษาอยู่ที่มหาวิทยาลัยราชภัฏ สวนสุนันทา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยี สารสนเทศ</p>
        </Title>

        <Title title="Work Experience">
          <p>-config network</p>
<p>-ใช้โปรแกรม FL studio ในการตัดต่อเสียง</p>
<p>-งานเกี่ยวกับ Lan Cable</p>

        </Title>

        <Title title="Skills">
          <p>HTML</p>
          <p>-microsoft word</p>
          <p>-adobe illustrator</p>
          <p>-FL studio</p>
          <p>-setting network</p>
          <p>-wordpress</p>
        </Title>
      </div>
    </main>
  )
}

export default App
