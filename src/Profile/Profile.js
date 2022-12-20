import FullName from './FullName';
import Profession from './Profession';
import Bio from './Bio';
import Image from './Image';
import "./Profile.css"
import Count from './Count';


const Profile = () => {
  const AdelImam = {
   FullName: "Adel Imam",
   Bio: "Adel Imam étudie l'agriculture à l'Université du Caire avant de se lancer dans une carrière artistique en 1966 en apparaissant dans plusieurs pièces de théâtre.En 1979, il obtient son premier grand rôle au cinéma dans le film Nous étions dans le bus.Emam avec star de cinéma Salah Zulfikar dans Virgo (1970)Dans les années 1980, il joue dans plusieurs films dont Le Tigre et la Femelle, mais c'est son rôle en 1992 dans le film Terrorisme et Kebab qui signe un de ses plus grands succès. Comédie égyptienne traitant de la corruption du gouvernement et du terrorisme, le film devient un grand classique en Égypte et reste encore aujourd'hui très populaire1. Deux ans plus tard, Adel Imam connaît un autre grand succès avec le film Le Terroriste, l'histoire de la rédemption d'un terroriste. Ces deux films, dénonçant entre autres le fanatisme religieux, deviennent la marque de fabrique d'Adel Imam qui prend souvent position contre l'obscurantisme et la corruption politique2.En 2006, il joue le rôle de Zakki dans le film L'Immeuble yacoubian, basé sur un roman décrivant l'état de la société égyptienne après le coup d'État de 19523. En 2008, Il joue le rôle de Morkos dans le film Hassan et Morkos qui retrace une histoire d'amitié entre un imam (Omar Sharif) et un prêtre copte, qui échangent leur costume pour échapper au fanatisme religieux4.",
   Profession: "Adel Imam (en arabe : عادل إمام), né le 17 mai 1940 à Mansourah, est un acteur et comédien égyptien.",
 };
 return (
   <div className="App">
     <FullName name={AdelImam} />
     <Profession profession={AdelImam} />
     
     <Image>
       <img
         src="https://www.albawaba.com/sites/default/files/styles/large/public/2020-03/B1vv5slCIAA4XGj.jpg?itok=mxCexxWx"
         alt="adel imam" />
     </Image>
     <Image/>
     <Bio bio={AdelImam}/>
     <Count/>

   </div>
 );
}

export default Profile