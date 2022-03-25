module.exports = {
    content: ['./src/**/*.html'],
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {
            colors: {
                bgcolor: '#3B3A48',
                white: '#FFFFFF',
                brownone: '#4A4B6C',
                browntwo: '#3D566C',
                violet: '#898EFA',
                blue: '#43C4FD',
                violeta: '#898EFA',
                bluea: '#47C2FD',
                violetx: '#9089FA',
                violetj: '#4D496C',
                graij: '#3D566C',
                violetg: '#4F4F76',
                violets: '#3F5B76',
                bgline: '#454451',
                bginput: '#3E4055',
                ts: 'transparent',
                footercolor: 'rgba(69, 68, 81, 0.75)'
            }
        },
        screens: {
            sm: { max: '639px' },
            xl: '1280px'

            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [require('@tailwindcss/forms')]
}
