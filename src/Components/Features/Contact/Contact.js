import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CallIcon from '@mui/icons-material/Call';
import styles from './style.module.css';
import svg from '../../../Assets/SVG/sideSvg.svg';
const Contact = () => {
    return (
        <>
          <div className={styles.mainContainer}></div>
            <div className={styles.container}>
                <div className={styles.descriptionSec}>
                    <h1 style={{ fontSize: '40px', textTransform: 'uppercase', fontWeight: '900', marginBottom: '10px' }} >Contact Us</h1>
                    <p style={{ fontSize: '14px', fontWeight: '400' , color: '#5A5959', lineHeight: '24px' , letterSpacing: '0em'

 }} >LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
                        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US
                        THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
                </div>
                <div className={styles.formSec}>
                    <div className={styles.form}>
                        <Stack direction="row" spacing={4} sx={{marginBottom: '10px'}}>
                            <Button hover variant="contained" sx={{  backgroundColor: 'black', boxShadow: 'none' }} startIcon={<MessageOutlinedIcon />} >
                                VIA SUPPORT CHAT
                            </Button>
                            <Button hovered variant="contained" sx={{ width: '200px', backgroundColor: 'black', boxShadow: 'none' }} startIcon={<CallIcon />}>
                                VIA CALL
                            </Button>
                        </Stack>
                        <Button hover variant="contained" sx={{marginBottom: '20px',  backgroundColor: 'transparent', border: '1px solid black', color: 'black', boxShadow: 'none' }} startIcon={<MessageOutlinedIcon />}>
                            VIA EMAIL FORM
                        </Button>
                        <div className={styles.inputWrapper}>
                        <label for="first">Name</label>
                        <input type="text" />
                        </div>
                        <div className={styles.inputWrapper}>
                        <label for="first">E-mail</label>
                        <input type="text" />
                        </div>
                        <div className={styles.inputWrapper}>
                        <label for="first">Text</label>
                        <textarea type="text" style={{height: '100px'}} />
                        </div>
                            
                        <Button variant="contained" sx={{ backgroundColor: 'black', width: '200px', margin: '10px 20px 0 0',
                                           display: 'flex', alignSelf: 'flex-end', boxShadow: 'none' }}>
                                Submit
                            </Button>

                    </div>
                    <div className={styles.sideImageSec}>
                        <img src={svg} alt='SideImage' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
