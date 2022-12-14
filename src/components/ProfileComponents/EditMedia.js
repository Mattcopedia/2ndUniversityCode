
import React from 'react'
import styled from "styled-components";  
import "../br.css" 
import { Link } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
 

const EditMedia = () => {
 
    return  ( 
        <>
        <Sidebar />
        <section class=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div class="container ">
          <div class="flex flex-wrap ">       
              <div class="flex items-center flex-wrap w-full ">

              <RootRoot>
    
            <div>
            <FlexColumn>
                <div className='mb-'>
                <GroupRootyw>
                    
                    <Lineyw src={`https://file.rendit.io/n/OYu2xn0faX7xcwwhEVap.svg`} />
                    <Link to="/profile-edit">
                    <FlexColumnyw left={`34px`}>
                        <Text1yw>Profile</Text1yw>   
                        <RoyalPurpleRectangle1yw />   
                        </FlexColumnyw>
                        </Link>
                    
                    <Link to="/editpassword">
                    <FlexColumnyw left={`106px`}>
                        <Text2yw>Password</Text2yw> 
                        <RoyalPurpleRectangle2yw />
                                               
                     </FlexColumnyw>
                    </Link>
                     

                  
                    <Link to="/editmedia">
                    <FlexColumnyw left={`194px`}>
                        <Text2yw>Media</Text2yw>
                        <RoyalPurpleRectangle1 /> 
                        
                    </FlexColumnyw>
                    </Link>
                    
                    </GroupRootyw>  
                </div>
                           

                <FlexColumn1>
                

                <form>   


             
                    <FlexRowyt>
                    <Element2yt>
                        <Text4 left={`23px`}>Profile Picture</Text4>
                        <Image1yt src={`https://file.rendit.io/n/dAGk2wWCFjaRIPqyrp8E.png`} />
                    </Element2yt>
                    <Element3yt>
                        <Text4yt left={`12px`}>Student signature</Text4yt>
                        <Image2yt src={`https://file.rendit.io/n/kKEXT2GCVBjGZLYyKG97.png`} />
                    </Element3yt>
                    </FlexRowyt>  


                 
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
  margin-bottom: 170px; 

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

const RoyalPurpleRectangle1 = styled.div`
  width: 62px;
  height: 3px;
  background-color: #2d0353;
`;





const Element2yt = styled.div`
  width: 120px;
  height: 153px;
  position: relative;
`;

const Element3yt = styled.div`
  width: 121px;
  height: 153px;
  position: relative;
`;

const Image1yt = styled.img`
  width: 123px;
  height: 124px;
  position: absolute;
  top: 33px;
`;

const Image2yt = styled.img`
  width: 125px;
  height: 124px;
  position: absolute;
  top: 33px;
`;

const Text4yt = styled.div`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #505050;
  position: absolute;
  left: ${(props) => props.left};
`;

const FlexRowyt = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
  justify-content: center;
  align-items: center;
  margin: 0px 71px 24.5px 0px;
`;



export default EditMedia; 


