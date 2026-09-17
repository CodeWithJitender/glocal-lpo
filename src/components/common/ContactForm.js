import React, { useState } from 'react';
import {
    Container,
    Grid2 as Grid,
    Button,
    Snackbar,
    Alert,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'; // Ensure this is installed

import { CircleArrow, CircleLoader } from '@/components/Icons';
import Heading from './Heading';
import InputField from './InputField';

import * as styles from './ContactForm.module.scss';

const ContactForm = (props) => {
    const { section } = props;

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
        reset,
    } = useForm();

    const { pathname } = useLocation();
    const navigate = useNavigate(); // 2. Initialize the navigate function
    const onSubmit = async (data) => {
        try {
            // DIRECT EMAILJS LOGIC - No backend required
            await emailjs.send(
                "service_5ukbpwr",     // Your Service ID
                "template_6ytxk8s",    // Your Template ID
                {
                    ...data,           // Sends all form fields (first_name, email, etc.)
                    page_url: pathname // Current page URL
                },
                "QpkBmnT4LJ4PGyWTX"    // Your Public Key
            );

            setStatus('success');
            // setMessage('Your message has been sent successfully!');
            reset(); // Clears the form fields
            navigate('/thank-you');
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus('error');
            setMessage('Failed to send message. Please try again later.');
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container
            maxWidth="xl"
            className={section === 'contact' ? styles.contactForm : ''}
        >
            <Grid
                container
                className={styles.commonContainer}
                rowSpacing={{ xs: 4, lg: 0 }}
                columnSpacing={{ xs: 0, lg: 12 }}
                alignItems="flex-start"
            >
                <Grid size={{ md: 12, lg: 4 }}>
                    <Heading className={`${styles.getInTouchHeading} ${section === 'contact' ? styles.getInTouchHeadingDark : ''}`}>Get In Touch</Heading>
                    <div className={`${styles.formHeading} ${section === 'contact' ? styles.formHeadingDark : ''}`}>
                        You Focus on Winning, We Take Care
                        of the Rest.
                    </div>
                    <div className={`${styles.formText} ${section === 'contact' ? styles.formTextDark : ''}`}>
                        At Glocal LPO, we provide full-spectrum legal support, enabling law
                        firms and attorneys to optimize case management.
                    </div>
                </Grid>

                <Grid container size={{ md: 12, lg: 8 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container size={12}>
                            <Grid size={12} className={`${styles.requiredFieldTitle} ${section === 'contact' ? styles.requiredFieldTitleDark : ''}`}>
                                All the fields marked with * are required
                            </Grid>
                            <Grid container size={12} flexDirection={{ xs: 'column', md: 'row' }} spacing={3} alignItems="flex-end" flexWrap={{ xs: 'wrap', md: 'nowrap' }}>
                                <Grid size={{ xs: 12, md: 'grow' }} container spacing={3}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InputField
                                            control={control}
                                            name="first_name"
                                            label="FIRST NAME"
                                            fullWidth
                                            variant="standard"
                                            rules={{ required: 'First name is required' }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InputField
                                            control={control}
                                            name="last_name"
                                            label="LAST NAME"
                                            fullWidth
                                            variant="standard"
                                            rules={{ required: 'Last name is required' }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InputField
                                            control={control}
                                            name="email"
                                            label="EMAIL"
                                            type="email"
                                            fullWidth
                                            variant="standard"
                                            rules={{
                                                required: 'Email is required',
                                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InputField
                                            control={control}
                                            name="company"
                                            label="COMPANY"
                                            fullWidth
                                            variant="standard"
                                            rules={{ required: 'Company is required' }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InputField
                                            control={control}
                                            name="job_title"
                                            label="JOB TITLE"
                                            fullWidth
                                            variant="standard"
                                            rules={{ required: 'Job title is required' }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InputField
                                            control={control}
                                            name="phone"
                                            label="PHONE"
                                            fullWidth
                                            variant="standard"
                                            rules={{ required: 'Phone is required' }}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <InputField
                                            control={control}
                                            name="message"
                                            label="PLEASE DESCRIBE THE TYPE OF SERVICE YOU ARE INTERESTED IN"
                                            fullWidth
                                            variant="standard"
                                            rules={{ required: 'This field is required' }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid size="auto" className={styles.submitWrapper}>
                                    <Button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <CircleLoader className={styles.loader} />
                                        ) : (
                                            <CircleArrow
                                                fill="#564847"
                                                className={`${styles.formSubmitButton} ${section === 'contact' ? styles.formSubmitButtonDark : ''}`}
                                            />
                                        )}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>

            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
                <Alert onClose={handleClose} severity={status} variant="filled" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ContactForm;