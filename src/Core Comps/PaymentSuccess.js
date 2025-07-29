
import logo from '../Img/icons_assets/LogoM.svg'
import { useEffect, useState } from 'react'

const formatTime = (time24h) => {
    const [hours, minutes] = time24h.split(':').map(Number)
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const formattedHours = hours % 12 || 12
    return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`
}

const PaymentSuccess = () => {
    const [successInfo, setSuccessInfo] = useState(null)

    useEffect(() => {
        const storedSuccessInfo = localStorage.getItem('successInfo')
        if (storedSuccessInfo) {
            const parsedInfo = JSON.parse(storedSuccessInfo)
            setSuccessInfo(parsedInfo)
            localStorage.removeItem('successInfo')
        }
    }, [])

    if (!successInfo) {
        return (
            <div className="bg-white min-h-screen flex justify-center items-center">
                <p className="text-dark_green text-xl">Loading confirmation details...</p>
            </div>
        )
    }

    const { confirmationType, reservationDetails } = successInfo

    let displayMessage
    if (reservationDetails) {
        displayMessage = (
            <>
                <h1 className="text-gold font-display text-display_size max-sm:text-6xl text-7xl mb-4">Reservation <br/> Confirmed!</h1>
                <img src={logo} className='w-16 h-24 drop-shadow-2xl'/>
                <p className="text-xl mb-6">Thank you for your reservation.</p>
                <div className="text-left text-lg">
                    <p><strong>Name:</strong> {reservationDetails.name}</p>
                    <p><strong>Date:</strong> {new Date(reservationDetails.date).toISOString().split('T')[0]}</p>
                    <p><strong>Time:</strong> {formatTime(reservationDetails.time)}</p>
                    <p><strong>Guests:</strong> {reservationDetails.guests}</p>
                    <p><strong>Occasion:</strong> {reservationDetails.occasion}</p>
                </div>
            </>
        )
    } else {
        const message = confirmationType === 'text'
            ? "You will be sent a verification text shortly."
            : "You will be sent a verification email shortly."
        displayMessage = (
            <>
                <h1 className="text-gold font-display text-display_size max-sm:text-6xl text-7xl mb-4">Payment Successful!</h1>
                <img src={logo} className='w-16 h-24 drop-shadow-2xl'/>
                <p className="text-xl mb-6">Thank you for your order.</p>
                {successInfo.name && <p className="text-xl mb-6"><strong>Name:</strong> {successInfo.name}</p>}
                <p className="text-xl mb-6">{message}</p>
            </>
        )
    }

    return (
        <div className='p-16 max-sm:p-10 bg-white'>
            <div className="bg-white h-[700px]  max-sm:h-[550px] flex justify-center">
                    <div className="text-center flex w-[600px] flex-col items-center text-white p-8 rounded-lg shadow-lg bg-dark_green mt-20 max-sm:mt-5 *:my-2">
                        {displayMessage}
                    </div>
            </div>
        </div>
    )
}

export default PaymentSuccess
