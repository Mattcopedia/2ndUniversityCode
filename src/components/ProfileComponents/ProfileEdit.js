
import React from 'react'
import styled from "styled-components";  
import "../br.css" 
import { Link } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
 

const ProfileEdit = () => {
 
    return  ( 
        <>
        <Sidebar />
        <section class=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div class="container ">
          <div class="flex flex-wrap ">       
              <div class="flex items-center flex-wrap w-full ">

              <RootRoot>
            <FlexRow>
                <Text1 alignSelf={`flex-end`}></Text1>
                <Link to="/login"> 
                <Text2></Text2>
                </Link>
                
            </FlexRow>

            <div>
            <FlexColumn>
                <div className='mb-10'>
                <GroupRootyw>
                    <Lineyw src={`https://file.rendit.io/n/OYu2xn0faX7xcwwhEVap.svg`} />
            
                    <FlexColumnyw left={`34px`}>
                        <Text1yw>Profile</Text1yw>
                        <RoyalPurpleRectangleyw />
                    </FlexColumnyw>

                    <Link to="/editpassword"> 
                    <FlexColumnyw left={`106px`}>
                        <Text2yw>Password</Text2yw>
                        <RoyalPurpleRectangle1yw />
                    </FlexColumnyw>
                    </Link>
                    <Link t0="/editmedia">
                    <FlexColumnyw left={`194px`}>
                        <Text2yw>Media</Text2yw>
                        <RoyalPurpleRectangle2yw />
                    </FlexColumnyw>
                    </Link>
                   
                    </GroupRootyw>  
                </div>
                           

                <FlexColumn1>
                

                <form>           
                <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                <Text4 htmlFor="First Name"> First name</Text4>        
                 <input className='form' placeholder='Ayomide joy' type="text" id="First Name"/>  
                 </FlexColumn2> 
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="Last name"> Last name</Text4>        
                 <input className='form' placeholder='Ayomide' type="text" id="Last name"/>  
                 </FlexColumn2> 
                
                 <FlexColumn2 margin={`0px 0px 10px 0px`}>  

                 <Text4 htmlFor="email"> Email</Text4>        
                 <input className='form' placeholder='akinzzz@zzz.com' type="email" id="email"/>  
                 </FlexColumn2> 
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="phonenumber"> Phone number</Text4>        
                 <input className='form' placeholder='08064540969' type="text" id="phonenumber"/>  
                 </FlexColumn2>  

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="address"> Address</Text4>        
                 <input className='form' placeholder='Imam saka str,Lagos' type="text" id="address"/>  
                 </FlexColumn2>  

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                    <Text4 htmlFor="NIM"> NIM</Text4>         
                    <input className='form' placeholder='NIM' type="text" id="NIM"/>   
                    </FlexColumn2> 
                 
                <button className='purplebtn' type='submit'>Save</button> 
                </form> 
               
                </FlexColumn1> 
                <div>
           
             </div>
            </FlexColumn>

            </div>  
            
           </RootRoot>  


              
              </div> 
            
            </div>
          </div>
    
      </section>

       <div> 
       
       </div>
        </> 
           
    )
 
}

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};



const Text1 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  
`;
const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
`;
const RootRoot = styled.div`


  min-width: 424px;
  min-height: 549px;    

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  background-color: #FAFAFA;

`;
const FlexRow = styled.div`
  align-self: stretch;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 13px;    
  align-items: flex-start;
  margin-right: 8px;
`; 
const Text2 = styled.div`
  font-size: 14px;
  font-family: Product Sans Black;
  text-decoration: underline;
  line-height: 21.21px;
  color: #df8909;
`;

//flex column is the problem





const FlexColumn = styled.div`
  min-height: 600px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:60px; 
  padding-left:60px; 


  @media ${devices.tablet} {
    margin-left: 90px;
    height: 319px;
    padding-left:27px;  
    padding-right:40px; 
    margin-left:10px
  }    


`;
const FlexColumn1 = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;
`; 








const FlexColumnyw = styled.div`
  display: flex;
  position: absolute;
  top: 11px;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.left};
`;
const Text2yw = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #b3b1b1;
`;
const GroupRootyw = styled.div`
  width: 453px;
  height: 49px;
  position: relative;
`;
const Lineyw = styled.img`
  width: 453px;
  height: 0.5px;
  position: absolute;
  top: 48.5px;
`;
const Text1yw = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #2d0353;
  align-self: flex-start;
`;
const RoyalPurpleRectangleyw = styled.div`
  width: 46px;
  height: 3px;
  background-color: #2d0353;
`;
const RoyalPurpleRectangle1yw = styled.div`
  width: 62px;
  height: 3px;
  background-color: #2d0353;
  opacity: 0;
`;
const RoyalPurpleRectangle2yw = styled.div`
  width: 39px;
  height: 3px;
  background-color: #2d0353;
  opacity: 0;
`;





export default ProfileEdit; 


