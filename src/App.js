import './App.css';
import Post from "./Components/Post"
import Navbar from "./Layout/Navbar"
import NavBtwen from "./NavBtwe/NavBtwen"


function App() {


  return (

    <>
      <Navbar />
      <NavBtwen/>
      <div className="App" >
            <Post 
            text=' Wonder Woman comes into conflict with the Soviet…' 
            image={image1}
            text2='wonder women' 
            likes='200'
            />

            <Post 
            text='When a prisoner transfer van is attacked, the cop in…' 
            image={image2}
            text2='Below Zero' 
            likes='230'
            />
            <Post 
            text='In the near future, a drone pilot is sent into a deadly…' 
            image={image3}
            text2='Outside the Wire' 
            likes='560'
            />

            <Post 
            text=' A portal transports Lt. Artemis and an elite unit of…' 
            image={image4}
            text2='Monster Hunter' 
            likes='150'
            />
            <Post 
            text=' A hardened mechanic must stay awake and maintain…' 
            image={image5}
            text2='Breach' 
            likes='100'
            />

            <Post 
            text=' Covert security company Vanguard is the last hope of…' 
            image={image6}
            text2='Vanguard' 
            likes='420'
            />

            <Post 
            text='Senior year of high school takes center stage as Lara… ' 
            image={image7}
            text2='To All the Boys' 
            likes='401'
            />

            <Post 
            text='Joe Gardner is a middle school teacher with a love for…' 
            image={image8}
            text2='soul' 
            likes='099'
            />

            <Post 
            text='As a filmmaker and his girlfriend return home from his…'
            image={image9}
            text2='Malcolm & Marie' 
            likes='1000'
            />
      </div>
    </>
  );
}

export default App;



const image1='https://www.hiamag.com/sites/default/files/styles/ph2_960_600/public/article/16/09/2020/9720351-444301785.jpg'
const image2="https://unknownworlds.com/subnautica/files/2018/08/20180830_SNZ_Blog_800.jpg"
const image3="https://i0.wp.com/www.theilluminerdi.com/wp-content/uploads/2021/01/outside-the-wire-wide.jpg?resize=1280%2C640&ssl=1"
const image4="https://gtxarabia.com/wp-content/uploads/2020/01/monster-hunter-world-iceborn.jpg"
const image5="https://buzz.tt/media/posters/2963/backdrops_4_1500.jpg"
const image6="https://cdn.platinumlist.net/upload/event/vanguard_at_dubai_opera_2020_oct_09_dubai_opera_80439-full-en1600862637.jpg"
const image7="https://i.insider.com/5fff186ffe7e140019f7eab8?width=700"
const image8="https://aspire.com.eg/wp-content/uploads/2021/01/scale.jpg"
const image9="https://i.ytimg.com/vi/0zX6MukFu0E/maxresdefault.jpg"







// eslint-disable-next-line no-lone-blocks
