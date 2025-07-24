import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Heading_Section'
import hero_img from '../Img/icons_assets/restaurant.jpg'

import Reserve_Form from './Reserve_Form'
import Billing from './Billing'

const Reservations = () => {
    const navigate = useNavigate();
    const [showBilling, setShowBilling] = useState(false);
    const [reservationData, setReservationData] = useState({});
    const [billingData, setBillingData] = useState({});
    const [finalFormData, setFinalFormData] = useState({});

    const handleContinueToBilling = useCallback((data) => {
        setReservationData(data);
        setShowBilling(true);
    }, []);

    const handleGoBackToReservation = useCallback((data) => {
        setBillingData(data);
        setShowBilling(false);
    }, []);

    const handleFinalSubmit = useCallback((billingValues) => {
        const combinedData = { ...reservationData, ...billingValues };
        setFinalFormData(combinedData);
        console.log('Final Combined Form Data:', combinedData);

        alert('Forms submitted successfully! Check console for data.');
        setReservationData({}); // Reset reservation data
        setBillingData({}); // Reset billing data
        setShowBilling(false); // Go back to the reservation form
        navigate('/'); // Redirect to home page
    }, [reservationData, navigate]);

    return (
        <>
            <Hero>
                <div className='w-hero-width'>
                    <h1 className="text-gold max-sm:w-4/5 font-display max-sm:text-3xl text-[44pt] -mt-7">Reserve Your Table Today – Effortless Booking, Exceptional Dining!</h1>
                    <h2 className="text-white max-sm:w-4/5 font-display text-4xl max-sm:text-2xl max-sm:m-0 mt-3 mb-7">Secure Your Spot for a Perfect Meal Experience.</h2>
                </div>
                <div className='flex justify-end'>
                    <img className="rounded-4xl w-hero-width" src={hero_img}/>
                </div>
            </Hero>
            {!showBilling ? (
                <Reserve_Form onContinueToBilling={handleContinueToBilling} initialValues={reservationData} />
            ) : (
                <Billing onGoBackToReservation={handleGoBackToReservation} initialValues={billingData} onFinalSubmit={handleFinalSubmit} reservationFormValid={Object.keys(reservationData).length > 0 && Object.values(reservationData).every(val => val !== '')} />
            )}
        </>
    )
}
export default Reservations
