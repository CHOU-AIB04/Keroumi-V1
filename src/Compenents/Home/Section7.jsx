import React from 'react'
import { motion } from 'framer-motion'
export const Section7 = () => {
    let [count,setcount] = usestate({
        
    })
  return (
    <article className='w-[90%]  h-[1200px] sm:h-[700px] small_tablet:h-[500px] flex flex-col items-center justify-between relative top-[2890px] sm:top-[2400px]  small_tablet:top-[700px]'>
        <motion.section viewport={{once:true}} initial={{gap:"100px",opacity:0}} transition={{duration:1}} whileInView={{gap:"20px",opacity:1}} className='w-full h-56  grid grid-cols-1 small_tablet:grid-cols-4 sm:grid-cols-2 relative'>
        <nav className='w-full h-full  gap-3 flex flex-col justify-around items-center'>
            <div>
                <svg id="time" xmlns="http://www.w3.org/2000/svg" width="115.752" height="105.841" viewBox="0 0 115.752 105.841">
                    <path id="Path_52" d="M98.337,32.477a45.36,45.36,0,1,0,45.36,45.36,45.36,45.36,0,0,0-45.36-45.36Zm0,81.27a35.91,35.91,0,1,1,35.91-35.91,35.911,35.911,0,0,1-35.91,35.91Zm0,0" transform="translate(-40.461 -24.917)" fill="#ff7400"></path>
                    <path id="Path_53" d="M232.31,4.257a49.049,49.049,0,0,1,48.83,43.678l.433,3.91,8.613-8.612-2.673-2.673-3.174,3.171A52.825,52.825,0,0,0,232.31.477c-1.308,0-2.627.047-3.918.141l.276,3.771c1.2-.089,2.425-.132,3.643-.132Zm0,0" transform="translate(-174.434 -0.477)" fill="#fff"></path>
                    <path id="Path_54" d="M57.876,278.632a49.05,49.05,0,0,1-48.83-43.678l-.433-3.911L0,239.656l2.673,2.673,3.173-3.172a52.827,52.827,0,0,0,52.03,43.255c1.311,0,2.633-.047,3.919-.144l-.28-3.769c-1.194.09-2.419.133-3.64.133Zm0,0" transform="translate(0 -176.572)" fill="#fff"></path>
                    <path id="Path_55" d="M122.777,64.477a37.8,37.8,0,1,0,37.8,37.8,37.843,37.843,0,0,0-37.8-37.8Zm1.89,71.723v-9.353h-3.78V136.2a34.009,34.009,0,0,1-32.034-32.033h9.354v-3.78H88.853a34.011,34.011,0,0,1,32.034-32.034v9.354h3.78V68.353A34.009,34.009,0,0,1,156.7,100.387h-9.353v3.78H156.7A34.008,34.008,0,0,1,124.667,136.2Zm0,0" transform="translate(-64.901 -49.357)" fill="#fff"></path>
                    <path id="Path_56" d="M228.537,151.944V136.476h-3.78v15.468a5.656,5.656,0,1,0,7.212,7.212h7.908v-3.78h-7.908A5.66,5.66,0,0,0,228.537,151.944Zm-1.89,7.212a1.89,1.89,0,1,1,1.89-1.89A1.892,1.892,0,0,1,226.647,159.156Zm0,0" transform="translate(-168.771 -104.346)" fill="#fff"></path>
                    <path id="Path_57" d="M193.422,3.961l3.705-.738.738,3.707-3.705.737Zm0,0" transform="translate(-147.726 -2.574)" fill="#fff"></path>
                    <path id="Path_58" d="M151.867,15.907l3.493-1.446,1.445,3.493L153.313,19.4Zm0,0" transform="translate(-115.988 -11.157)" fill="#fff"></path>
                    <path id="Path_59" d="M113.879,35.88l3.143-2.1,2.1,3.143-3.144,2.1Zm0,0" transform="translate(-86.975 -25.913)" fill="#fff"></path>
                    <path id="Path_60" d="M80.926,63.1,83.6,60.43,86.271,63.1,83.6,65.775Zm0,0" transform="translate(-61.807 -46.266)" fill="#fff"></path>
                    <path id="Path_61" d="M54.27,96.522l2.1-3.142,3.142,2.1-2.1,3.142Zm0,0" transform="translate(-41.448 -71.431)" fill="#fff"></path>
                    <path id="Path_62" d="M34.961,134.852l1.447-3.492,3.492,1.447L38.453,136.3Zm0,0" transform="translate(-26.701 -100.438)" fill="#fff"></path>
                    <path id="Path_63" d="M23.723,176.633l.737-3.707,3.707.736-.736,3.708Zm0,0" transform="translate(-18.118 -132.184)" fill="#fff"></path>
                    <path id="Path_64" d="M277.711,427.624l3.705-.737.738,3.707-3.705.737Zm0,0" transform="translate(-212.102 -326.147)" fill="#fff"></path>
                    <path id="Path_65" d="M317.191,415.027l3.493-1.445,1.445,3.493-3.492,1.445Zm0,0" transform="translate(-242.254 -315.985)" fill="#fff"></path>
                    <path id="Path_66" d="M353.906,395.073l3.146-2.1,2.1,3.144-3.145,2.1Zm0,0" transform="translate(-270.295 -300.245)" fill="#fff"></path>
                    <path id="Path_67" d="M386.395,368.571l2.673-2.673,2.673,2.673-2.673,2.673Zm0,0" transform="translate(-295.109 -279.567)" fill="#fff"></path>
                    <path id="Path_68" d="M413.5,336.532l2.1-3.145,3.143,2.1-2.1,3.145Zm0,0" transform="translate(-315.813 -254.736)" fill="#fff"></path>
                    <path id="Path_69" d="M434.086,300.184l1.445-3.492,3.493,1.445-1.446,3.493Zm0,0" transform="translate(-331.533 -226.711)" fill="#fff"></path>
                    <path id="Path_70" d="M447.41,260.952l.738-3.705,3.707.738-.738,3.705Zm0,0" transform="translate(-341.709 -196.584)" fill="#fff"></path>
                </svg>
            </div>
           <div className='flex flex-col items-center gap-1'>
                <h1 className='uppercase text-[50px] font-bold text-white'>1925</h1>
                <h2 className='uppercase text-[15px] font-bold text-white'>WORKING HOURS</h2>
           </div>
        </nav>
        <nav className='w-full h-full  gap-3 flex flex-col justify-around items-center'>
            <div>
                <svg id="sports-and-competition" xmlns="http://www.w3.org/2000/svg" width="75.169" height="105.92" viewBox="0 0 75.169 105.92">
                    <path id="Path_71" d="M43.358,1A22.369,22.369,0,0,0,25.806,9.436l-.255.318A10.717,10.717,0,0,0,18,20V36.876h1.708a6.834,6.834,0,0,1,6.834-6.834,15.75,15.75,0,0,0,8.122-6.2l.42-.63.514.514a15.744,15.744,0,0,0,11.134,4.611h.67a15.746,15.746,0,0,1,8.733,2.645l1.158.772V30.043a6.834,6.834,0,0,1,6.834,6.834h1.708v-13.4A22.5,22.5,0,0,0,43.358,1Z" transform="translate(-4.333 -1)" fill="#ff7400"></path>
                    <g id="Group_34" data-name="Group 34" transform="translate(0 19.527)">
                        <rect id="Rectangle_11" data-name="Rectangle 11" width="4" height="4" transform="translate(24 58.393)" fill="#fff"></rect>
                        <path id="Path_72" d="M82.1,74.906l.589-.885a14.776,14.776,0,0,0-.757-17.429,16.534,16.534,0,0,0-11.494-6.125l-12.6-1.051V45.831a17.133,17.133,0,0,0,6.077-8.605,8.517,8.517,0,0,0,.757-16.816V16.821H61.252v3.793a17.36,17.36,0,0,0-8.185-2.084H52.4a13.948,13.948,0,0,1-9.926-4.112L40.486,12.43l-1.577,2.363a14.084,14.084,0,0,1-4.992,4.541V16.821H30.5V20.41a8.517,8.517,0,0,0,.757,16.816,17.123,17.123,0,0,0,6.077,8.605v3.586l-12.6,1.049A16.54,16.54,0,0,0,13.239,56.59a14.778,14.778,0,0,0-.757,17.431l.589.885-.589.885A14.73,14.73,0,0,0,10,83.988v.627a14.726,14.726,0,0,0,2.482,8.2l.934,1.4v4.608H81.752V94.216l.934-1.4a14.73,14.73,0,0,0,2.482-8.2v-.627a14.726,14.726,0,0,0-2.482-8.2ZM68.085,28.779A5.116,5.116,0,0,1,64.6,33.612c.039-.468.072-.938.072-1.416V23.968A5.118,5.118,0,0,1,68.085,28.779Zm-41,0A5.118,5.118,0,0,1,30.5,23.968V32.2c0,.478.032.948.072,1.416A5.116,5.116,0,0,1,27.084,28.779ZM33.917,32.2V23.078a17.53,17.53,0,0,0,7.092-5.358A17.328,17.328,0,0,0,52.4,21.946h.67A13.989,13.989,0,0,1,60.854,24.3l.4.265V32.2a13.667,13.667,0,0,1-27.334,0ZM27.084,79.987a8.454,8.454,0,0,0,5.125,1.753h8.3a8.524,8.524,0,0,0,7.074-3.76,8.522,8.522,0,0,0,7.074,3.76h8.3a8.454,8.454,0,0,0,5.125-1.753v15.42h-41Zm52.76-2.3a11.331,11.331,0,0,1,1.908,6.3v.627a11.323,11.323,0,0,1-1.908,6.3L78.336,93.18v2.226H71.5V61.239H68.085V73.2a5.131,5.131,0,0,1-5.125,5.125h-8.3a5.118,5.118,0,0,1-4.264-2.282l-1.1-1.652V69.781H45.876v4.608l-1.1,1.652a5.114,5.114,0,0,1-4.264,2.282h-8.3A5.131,5.131,0,0,1,27.084,73.2V61.239H23.667V95.407H16.834V93.18l-1.509-2.264a11.321,11.321,0,0,1-1.908-6.3v-.627a11.323,11.323,0,0,1,1.908-6.3l1.854-2.781-1.854-2.78a11.364,11.364,0,0,1,.581-13.4,13.114,13.114,0,0,1,9.111-4.854L40.751,52.56V47.843a16.969,16.969,0,0,0,13.667,0V52.56l15.734,1.312a13.118,13.118,0,0,1,9.111,4.854,11.364,11.364,0,0,1,.581,13.4l-1.854,2.78Z" transform="translate(-10 -12.43)" fill="#fff"></path>
                        <rect id="Rectangle_12" data-name="Rectangle 12" width="3" height="4" transform="translate(48 58.393)" fill="#fff"></rect>
                        <rect id="Rectangle_13" data-name="Rectangle 13" width="3" height="5" transform="translate(36 48.393)" fill="#fff"></rect>
                        <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="2" cy="1.5" rx="2" ry="1.5" transform="translate(44 11.393)" fill="#fff"></ellipse>
                        <circle id="Ellipse_2" data-name="Ellipse 2" cx="1.5" cy="1.5" r="1.5" transform="translate(28 11.393)" fill="#fff"></circle>
                        <path id="Path_73" d="M34.834,32.834A6.84,6.84,0,0,0,41.667,26H38.25a3.417,3.417,0,0,1-6.834,0H28A6.84,6.84,0,0,0,34.834,32.834Z" transform="translate(2.751 -2.817)" fill="#fff"></path>
                    </g>
                </svg>
            </div>
           <div className='flex flex-col items-center gap-1'>
                <h1 className='uppercase text-[50px] font-bold text-white'>1925</h1>
                <h2 className='uppercase text-[15px] font-bold text-white'>WORKING HOURS</h2>
           </div>
        </nav>
        <nav className='w-full h-full flex flex-col gap-3 justify-around items-center'>
            <div>
                <svg id="print" xmlns="http://www.w3.org/2000/svg" width="105" height="104.605" viewBox="0 0 105 104.605">
                    <path id="Path_74" d="M20.362,53.105l1.451-2a37.745,37.745,0,0,1,3.214-3.839,16.911,16.911,0,1,1,16.988-10.3,37.859,37.859,0,0,1,9.235-1.451A25.388,25.388,0,1,0,19.668,54.868,3.812,3.812,0,0,1,20.362,53.105Z" transform="translate(-1 1.774)" fill="#ff7400"></path>
                    <path id="Path_75" d="M81.21,80.129H63.7l8.434-7.379a6.735,6.735,0,0,0-.865-10.779l-9.479-5.926L73.511,42.861A27.558,27.558,0,0,0,95.393,31l6.84-9.882a5.563,5.563,0,0,0-4.573-8.734h-.931a5.575,5.575,0,0,0-4.5,2.293l-5.287,7.27A22.059,22.059,0,0,1,72.9,30.65a11.851,11.851,0,1,0-16.91.366H49.723a39.369,39.369,0,0,0-7.963.832A18.625,18.625,0,1,0,18.985,45.642c-.45.554-.891,1.116-1.314,1.7l-1.453,2a5.527,5.527,0,0,0,4.471,8.778h1.065a5.484,5.484,0,0,0,4.363-2.134l1.346-1.729A29.247,29.247,0,0,1,48.226,42.976L18.755,72.449a6.375,6.375,0,0,0-1.074,7.68H6.694v3.387H84.6V79.734L96.546,86.9,84.6,94.072V90.29H11.774v3.387H81.21v6.38L103.131,86.9,81.21,73.749Zm-25.4-57.581a8.468,8.468,0,1,1,8.468,8.468A8.477,8.477,0,0,1,55.806,22.548ZM14.147,39.506l2.3-2.3-2.395-2.395-2.3,2.3a15.182,15.182,0,0,1-3.258-7.79h3.282V25.935H8.487a15.168,15.168,0,0,1,3.245-7.809l2.317,2.317,2.395-2.395-2.317-2.317a15.168,15.168,0,0,1,7.809-3.245v3.287h3.387V12.487a15.168,15.168,0,0,1,7.809,3.245l-2.317,2.317,2.395,2.395,2.317-2.317a15.168,15.168,0,0,1,3.245,7.809H35.484v3.387h3.287a15.021,15.021,0,0,1-.83,3.5,39.812,39.812,0,0,0-16.3,9.884,15.111,15.111,0,0,1-7.5-3.2ZM51.461,80.129H29.619L47.476,63.461,57.761,68.6l-4.684,3.748a6.184,6.184,0,0,0-1.616,7.777Zm5.535,0A2.882,2.882,0,0,1,55.193,75l8.818-7.054L46.887,59.38,25.546,79.3a3.153,3.153,0,0,1-2.207.832,3.1,3.1,0,0,1-2.19-5.286l31.27-31.271V39.484H50.726A32.644,32.644,0,0,0,24.791,52.169L23.444,53.9a2.13,2.13,0,0,1-1.69.826H20.689a2.141,2.141,0,0,1-1.731-3.4l1.451-2A36.358,36.358,0,0,1,49.723,34.4H69.136A25.485,25.485,0,0,0,89.681,23.94l5.289-7.27a2.18,2.18,0,0,1,1.76-.9h.931a2.181,2.181,0,0,1,2.178,2.178,2.153,2.153,0,0,1-.388,1.238l-6.842,9.884a24.166,24.166,0,0,1-19.867,10.41h-.76L56.6,56.794l12.879,8.049a3.345,3.345,0,0,1,.43,5.355L59.371,79.414a2.867,2.867,0,0,1-1.9.715Z" transform="translate(1.774 4.548)" fill="#fff"></path>
                    <path id="Path_76" d="M5,57H8.387v3.387H5Z" transform="translate(1.774 37.839)"></path>
                    <path id="Path_77" d="M1,57H4.387v3.387H1Z" transform="translate(-1 37.839)" fill="#fff"></path>
                    <path id="Path_78" d="M13.387,10.027h3.387V4.387h6.774v5.64h3.387V4.387h3.387V1H10V4.387h3.387Z" transform="translate(5.242 -1)" fill="#fff"></path>
                    <path id="Path_79" d="M21.278,25.658l-2.891-2.891V15H15v9.169l3.883,3.883Z" transform="translate(8.71 8.71)" fill="#fff"></path>
                </svg>
            </div>
           <div className='flex flex-col items-center gap-1'>
                <h1 className='uppercase text-[50px] font-bold text-white'>1925</h1>
                <h2 className='uppercase text-[15px] font-bold text-white'>WORKING HOURS</h2>
           </div>
        </nav>
        <nav className='w-full h-full flex  gap-3 flex-col justify-around items-center'>
            <div>
                <svg id="gym_1_" xmlns="http://www.w3.org/2000/svg" width="107.31" height="105.804" viewBox="0 0 107.31 105.804">
                    <g id="Group_35" data-name="Group 35" transform="translate(31.443 56.782)">
                        <path id="Path_80" d="M158.253,279.746h-4.7a7.947,7.947,0,0,1-6.628-3.549l-1.612-2.417,2.88-1.92,1.612,2.417a4.492,4.492,0,0,0,3.748,2.006h4.7a4.421,4.421,0,0,0,.881-.088l5.823-1.163a1.048,1.048,0,0,0,.836-1.021V265.9h3.462v8.115a4.518,4.518,0,0,1-3.618,4.416l-5.823,1.163A7.83,7.83,0,0,1,158.253,279.746Z" transform="translate(-145.312 -265.896)" fill="#ff7400"></path>
                        <path id="Path_81" d="M159.129,351.752h-5.577a7.947,7.947,0,0,1-6.628-3.549l-1.612-2.417,2.88-1.92,1.612,2.417a4.492,4.492,0,0,0,3.748,2.006h5.577a4.536,4.536,0,0,0,2.015-.474l4.075-2.039a1.039,1.039,0,0,0,.575-.93V337.9h3.462v6.943a4.482,4.482,0,0,1-2.488,4.026l-4.077,2.039A8.008,8.008,0,0,1,159.129,351.752Z" transform="translate(-145.312 -322.323)" fill="#ff7400"></path>
                        <path id="Path_82" d="M255.68,279.746h-4.7a7.873,7.873,0,0,1-1.563-.156l-5.82-1.163a4.517,4.517,0,0,1-3.62-4.416V265.9h3.462v8.115a1.048,1.048,0,0,0,.838,1.021l5.82,1.163a4.451,4.451,0,0,0,.883.088h4.7a4.5,4.5,0,0,0,3.748-2.006l1.612-2.417,2.88,1.92-1.612,2.417A7.949,7.949,0,0,1,255.68,279.746Z" transform="translate(-219.492 -265.896)" fill="#ff7400"></path>
                        <path id="Path_83" d="M255.674,351.752H250.1a8.021,8.021,0,0,1-3.564-.84l-4.077-2.039a4.479,4.479,0,0,1-2.488-4.026V337.9h3.462v6.943a1.034,1.034,0,0,0,.576.93l4.075,2.039a4.513,4.513,0,0,0,2.015.474h5.577a4.5,4.5,0,0,0,3.748-2.006l1.612-2.417,2.88,1.92L262.3,348.2A7.949,7.949,0,0,1,255.674,351.752Z" transform="translate(-219.486 -322.323)" fill="#ff7400"></path>
                    </g>
                    <g id="Group_36" data-name="Group 36">
                        <path id="Path_84" d="M15.605,168.32l-.874,5.252c-1.058,6.343-4.1,10.438-9.322,12.524l-1.336.535.28,1.413c1.061,5.307-.033,10.717-3.249,16.08L4.073,205.9c3.4-5.667,4.714-11.434,3.91-17.162a17.359,17.359,0,0,0,8.963-10l6.481,12.964,1.655,9.931-1.7,25.544L19.99,237.356l3.282,1.1,3.464-10.386,1.831-26.6L26.8,190.883Z" transform="translate(-0.865 -132.652)" fill="#fff"></path>
                        <path id="Path_85" d="M13.146,6.265,11.077,3.488C4.665,8.273,1.044,16.035,0,27.217l3.448.322C4.393,17.387,7.566,10.428,13.146,6.265Z" transform="translate(0 -3.486)" fill="#fff"></path>
                        <path id="Path_86" d="M392.131,188.05l.282-1.413-1.336-.535c-5.216-2.086-8.264-6.182-9.322-12.524l-.876-5.25L369.843,190.4l-1.923,11.074,1.745,26.167,3.549,10.819,3.28-1.1L373.1,227.187l-1.7-25.543,1.655-9.931,6.481-12.964a17.371,17.371,0,0,0,8.963,10c-.8,5.73.509,11.5,3.91,17.162l2.969-1.781C392.163,198.769,391.071,193.359,392.131,188.05Z" transform="translate(-288.309 -132.658)" fill="#fff"></path>
                        <path id="Path_87" d="M444.881,27.533l3.447-.322c-1.04-11.184-4.663-18.946-11.075-23.731l-2.069,2.777C440.765,10.42,443.938,17.38,444.881,27.533Z" transform="translate(-341.018 -3.48)" fill="#fff"></path>
                        <path id="Path_88" d="M157.36,152.736l-3.348-.888c-1.366,5.152-4.22,13.1-6.284,14.633a19.484,19.484,0,0,1-12.6,3.135c-2.127-.267-5.7-1.729-9.8-4.011a1.577,1.577,0,0,1-.8-1.38v-6.741h-3.462v6.742a1.575,1.575,0,0,1-.8,1.38c-4.1,2.282-7.67,3.744-9.8,4.011a19.467,19.467,0,0,1-12.6-3.135C95.8,164.949,92.946,157,91.58,151.85l-3.348.885c.6,2.269,3.789,13.72,7.565,16.526a22.622,22.622,0,0,0,12.782,3.931,18.719,18.719,0,0,0,2.314-.138c3.32-.417,7.843-2.635,11.051-4.421A4.847,4.847,0,0,0,122.8,168a4.965,4.965,0,0,0,.85.635c3.209,1.788,7.731,4.006,11.049,4.421a18.454,18.454,0,0,0,2.316.14,22.626,22.626,0,0,0,12.782-3.93C153.573,166.458,156.759,155.005,157.36,152.736Z" transform="translate(-69.14 -119.744)" fill="#fff"></path>
                        <path id="Path_89" d="M60.551,59.985a19.223,19.223,0,0,0,3.637-6.893c7.454-4.213,10.416-12.355,10.54-12.708l-3.263-1.16c-.028.078-2.8,7.691-9.547,11.157l-.72.37-.178.789a16.069,16.069,0,0,1-3.076,6.166Z" transform="translate(-45.406 -31.49)" fill="#fff"></path>
                        <path id="Path_90" d="M177.043,38.2A28.46,28.46,0,0,1,165.7,34.96l-1.721,3a31.555,31.555,0,0,0,12.9,3.691Z" transform="translate(-128.501 -28.148)" fill="#fff"></path>
                        <path id="Path_91" d="M370.966,53.079A19.283,19.283,0,0,0,374.6,59.97l2.609-2.276a16.285,16.285,0,0,1-3.08-6.169l-.18-.788-.715-.369c-6.713-3.445-9.519-11.082-9.548-11.16l-3.261,1.163C360.55,40.726,363.512,48.866,370.966,53.079Z" transform="translate(-282.435 -31.477)" fill="#fff"></path>
                        <path id="Path_92" d="M284.659,37.97l-1.724-3A28.293,28.293,0,0,1,271.6,38.2l.159,3.459A31.533,31.533,0,0,0,284.659,37.97Z" transform="translate(-212.831 -28.155)" fill="#fff"></path>
                        <rect id="Rectangle_14" data-name="Rectangle 14" width="3.462" height="3.462" transform="translate(51.92 30.818)" fill="#fff"></rect>
                        <path id="Path_93" d="M327.308,452.89l-1.084-1.546a17.162,17.162,0,0,0-5.841,7.791l3.282,1.1a13.811,13.811,0,0,1,4.546-6.057h0l0,0Z" transform="translate(-251.059 -354.434)" fill="#fff"></path>
                        <path id="Path_94" d="M141.351,451.344l-1.991,2.834a13.79,13.79,0,0,1,4.549,6.059l3.282-1.1A17.148,17.148,0,0,0,141.351,451.344Z" transform="translate(-109.205 -354.434)" fill="#fff"></path>
                    </g>
                </svg>
            </div>
           <div className='flex flex-col items-center gap-1'>
                <h1 className='uppercase text-[50px] font-bold text-white'>1925</h1>
                <h2 className='uppercase text-[15px] font-bold text-white'>WORKING HOURS</h2>
           </div>
        </nav>     
    </motion.section>
    <motion.section viewport={{once:true}} initial={{gap:"100px",opacity:0}} transition={{duration:1}} whileInView={{gap:"40px",opacity:1}} className='flex flex-col small_tablet:flex-row justify-between items-center w-full h-28 '>
        <h1 className='text-[18px] text-center small_tablet:text-left sm:text-[25px] small_tablet:text-[30px] font-bold uppercase text-white'>GOT A QUASTION? WE WOULD BE HAPPY TO HELP!</h1>
        <a href="#Contact">
        <button className='w-48 h-11  rounded-xl sh text-white transition-all duration-500 hover:bg-white hover:text-orange-500 font-bold bg-orange-500'>Contact Us</button>
        </a>
    </motion.section>
    </article>
  )
}
