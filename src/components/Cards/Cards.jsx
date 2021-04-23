import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Typography gutterBottom variant="h4" component="h2">Güncel Global Veriler</Typography>
            <Grid container spacing={3} justify="center">
                <CardComponent
                    className={styles.infected}
                    cardTitle="Enfekte Sayısı"
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Aktif COVID-19 Enfekte Sayısı"
                />
                <CardComponent
                    className={styles.recovered}
                    cardTitle="İyileşen Sayısı"
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Aktif COVID-19 İyileşen Sayısı"
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Ölü Sayısı"
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Aktif COVID-19 Vaka Sayısı"
                />
            </Grid>
        </div>
    );
};

export default Info;
