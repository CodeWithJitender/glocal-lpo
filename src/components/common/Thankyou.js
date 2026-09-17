import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { Heading, LinkButton, Animate } from '@/components/common';
import { routes } from "@/utils/routesPath";
import stampIcon from "@/assets/images/layer-stamp.png";

import * as styles from './ThankYou.module.scss';

const ThankYou = () => {
    return (
        <section className={styles.thankYouSection}>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    className={styles.contentWrapper}
                >
                    <Animate.ScaleIn>
                        <img src={stampIcon} className={styles.stampIcon} alt="Success" />
                    </Animate.ScaleIn>

                    <Heading variant="secondary" direction="down">
                        Submission Received
                    </Heading>

                    {/* <Heading className={styles.mainTitle} direction="up">
                        Your Message is <br/> 
                        in Capable Hands.
                    </Heading> */}

                    <Animate.FadeUp className={styles.subText}>
                        One of our specialists will review your
                        inquiry shortly. To expedite the process, you can <b style={{ color: '#a4836f' }}>schedule
                            a meeting</b> directly below.
                    </Animate.FadeUp>

                    {/* Calendly Inline Widget */}
                    {/* New Small Heading Section */}
                    <div className={styles.scheduleHeader}>
                        {/* <Heading variant="secondary" direction="down">
                            Consultation
                        </Heading> */}
                        {/* <Heading variant="secondary" direction="up">
                            Schedule a Meeting
                        </Heading> */}
                    </div>
                    {/* <Animate.FadeUp className={styles.calendlyContainer}>
    <iframe
        // Added &theme=dark to the URL to match your site
        src="https://cal.com/glocal-lpo/30min?user=glocal-lpo&duration=30&theme=dark"
        width="100%"
        height="100%" 
        frameBorder="0"
        title="Schedule a Meeting"
        scrolling="no" 
    ></iframe>
</Animate.FadeUp> */}

                    <Grid container spacing={3} className={styles.buttonGroup}>
                        <Grid>
                            <LinkButton
                                to={routes.home.href}
                                variant="outline"
                            >
                                BACK TO HOME
                            </LinkButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default ThankYou;