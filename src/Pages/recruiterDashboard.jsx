import { React, useState, useEffect, useRef } from 'react';
import { ResponsiveLine } from "@nivo/line";
import Select from 'react-select';
import image1 from "../assets/image1.png"
import image2 from '../assets/Aspireit.png';
import image3 from '../assets/Ellipse 1872.svg';
import image4 from '../assets/Type=Layila.svg';


const RecruiterDashboard = () => {

  const [searchPhrase, setSearchPhrase] = useState('');
  const [isFocused1, setisFocused1] = useState(false);
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSearch = (e) => {
    setSearchPhrase(e.target.value);
  };

  useEffect(() => {
    if (isFocused1 === false) {
      setSearchPhrase('');
    }
  }, [isFocused1]);


  // <--------- Data Consts ----------->

  const progress = {
    yesterdaysProgress: [
      "Your job posting for Software Engineer attracted 392 applicants in just 12 days.",
      "You reviewed 85 candidate profiles and scheduled 5 interviews yesterday."
    ],
    todaysGoals: [
      "Review applications for Software Engineer (392 pending)",
      "Post a new job for Marketing Manager.",
      "Schedule AI Interview",
      "Schedule AI Interview"
    ]
  };


  const rounds = {
    marketingManager: {
      postedOn: '12th Dec 2024',
      jobPosted: 1, // Completed
      applicantsApplied: 1, // Pending
      selectionComplete: 1, // Pending
      aiInterviewPending: 0, // Pending
      aiTechnicalRound: 0, // Pending
      shortlistedCandidates: 0, // Pending
    },
    softwareDeveloper: {
      postedOn: '12th Dec 2024',
      jobPosted: 1, // Completed
      applicantsApplied: 1, // Completed
      selectionComplete: 1, // Completed
      aiInterviewPending: 0, // Completed
      aiTechnicalRound: 0, // Pending
      shortlistedCandidates: 0, // Pending
    }
  };

  const statusStyles = {
    completed: {
      circle: 'bg-[#7d7da4] border-[#c3c3ea] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.25)]',
      text: 'text-[#7d7da4]',
    },
    pending: {
      circle: 'bg-[#d7d7fe]',
      text: 'text-[#c3c3ea]',
    },
    active: {
      circle: 'bg-[#7d7da4] shadow-[0px_0px_24px_2px_rgba(151,71,255,1.00)]',
      text: 'text-transparent font-bold',
      gradient: 'linear-gradient(319deg, #D388FF 5.96%, #4B94F6 95.49%)',
    },
  };

  const roundsList = [
    { label: 'Job Posted', key: 'jobPosted' },
    { label: 'Applicants Applied', key: 'applicantsApplied' },
    { label: 'Selection Complete', key: 'selectionComplete' },
    { label: 'AI Interview Pending...', key: 'aiInterviewPending', isActive: true },
    { label: 'AI Technical Round', key: 'aiTechnicalRound' },
    { label: 'Shortlisted Candidates', key: 'shortlistedCandidates' },
  ];


  const scores = {
    aiTechnicalRoundAndInterview: {
      postedOn: '12th Dec 2024',
      "Kunal P.": 97,
      "Muskan M.": 96,
      "Gautam K.": 91,
      "Payal R.": 90,
      "Kunal M.": 84,
      "Rahul V.": 83,
    },
    aiNonTechnicalRoundAndInterview: {
      postedOn: '13th Dec 2024',
      "Aman S.": 92,
      "Riya T.": 89,
      "Vikas J.": 87,
      "Neha G.": 85,
      "Rahul V.": 83,
    }
  };

  const schedule = {
    meet: ['Dhaval Jha | UI/UX Designer | 24th Jan | 11AM'],
    zoom: ['Christine | AI Engineer | 24th Jan | 2PM'],
  }
  const googleMeet = "https://s3-alpha-sig.figma.com/img/b37e/be4e/3abb7516c4f7dd6da8177518f712eb09?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XA4-MPAmnelxCyHDUN-CkUJx0qNII7ZTT1IkgV3KrLxE6wR7toPuYzpGSOxdXD~qr0DKsXwbQXj6~iWQPpm0UMlmPF~T0BJv6Zw-SQmU2JByyGwmtzyjOdHyaAVDowwRSRMfH3ciZd~fywdAKOsjEfLlH-XKdjSriRiEu5kPp4K6lXYCXj-Tmuiy14HUQyW1OUeatNQhiDXgTH~rnK2crhUhWfWFR-78q2sLZcd59NqQrjaWiwr3vTWwbYVbyOG8O1bbfTyYsQAi-Di4Np~ADFPaFJB0vqUPpWuyx5iEeleZ1j--GZGSM9NoHInL78bswyKFgGjHLl0WY10XwWsN3g__";
  const zoom = "https://s3-alpha-sig.figma.com/img/8a76/0006/20564ddd89bc90c94911ce13c481f7d8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8N7eCw8o7Hvg2my~I4Jw7fapvPNNcw9kxV2gv05CUooPsfowMNCfMkYs7OS5gWgOyb8QCC7Y3kqXn0KEEmdKaDxCs8ZRGnEs6oa8rCEr9RQL3Ci73EoQsWs-qqyQKwk8yBCyN2UYyHl6OdfAWkPkW7ibT6D8CU9ie40-usIcOXtSmgKfK-2JjWNV3wIwKju9Y-xdAVrLrXCdI4NdwB8nNzcAn8bWn7Bd8VqBZ83~PLr94r7Ft1Pq6p2KrgIthRuvEXNw3oIdomNHmMB7uoiQipx-4i~kkYKm9AOxhacokAXS6EOkuxzAlXJ5nvEa3~E70vzifekcO85LdulJ3uLaA__";


  const [openSelect, setOpenSelect] = useState(false);

  const options = [
    { value: 'aiTechnicalRoundAndInterview', label: 'AI Technical Round & Interview' },
    { value: 'aiNonTechnicalRoundAndInterview', label: 'AI Non-Technical Round & Interview' },
  ];

  const [option, setOption] = useState(options[0].value);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "none",
      border: "none",
      color: "#161616",
      height: "36px",
      width: "full",
      minWidth: "300px",
      fontWeight: "400",
      boxShadow: "none",
      display: "flex",
      justifySelf: "center",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: "25px",
      ":hover": {
        borderColor: "#EBEBEB",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      width: "20px",
      height: "20px",
      position: "absolute",
      color: "#0072DC",
      top: "27%",
      right: "10px",
      padding: "0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      position: "fixed",
      backgroundColor: "#D7D7D7",
      border: "1px solid #EBEBEB",
      borderRadius: "4px",
      zIndex: 999,
      top: "auto",
      left: "auto",
      fontSize: "18px",
      maxWidth: "250px",
      maxHeight: "300px",
      overflowY: "auto",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#161616",
      fontWeight: "400",
      fontSize: "18px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#161616",
      fontSize: "14px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#C3C3EA" : "#D7D7D7",
      color: "#161616",
      fontWeight: state.isSelected ? "600" : "400",
      padding: "10px 20px",
      cursor: "pointer",
      ":active": {
        backgroundColor: "#EBEBEB",
      },
    }),
  };

  const toggleDialogOption = () => {
    setOpenSelect(!openSelect);
  };

  const handleChangeOption = (selectedOption) => {
    setOption(selectedOption.value);
    toggleDialogOption();
  };

  const currentScores = scores[option];
  const scoreEntries = Object.entries(currentScores || {}).filter(([key]) => key !== "postedOn");

  const formattedData = Object.entries(currentScores)
    .filter(([key]) => key !== 'postedOn') // Exclude 'postedOn'
    .map(([name, score]) => ({
      candidate: name,
      score,
    }));

    const lineData = [
      {
        id: "Scores",
        color: "#A5A5CC",
        data: [
          { x: "", y: null }, // Invisible padding point on the left
          ...Object.entries(currentScores || {})
            .filter(([key]) => key !== "postedOn")
            .map(([name, score]) => ({
              x: name,
              y: score,
            })),
          { x: " ", y: null }, // Invisible padding point on the right
        ],
      },
    ];
    



  return (
    <div className='.main-container min-h-[100vh] bg-[#F1F4F8] pb-8'>
      <div className="NavBar w-full mx-[auto] h-[8vh] min-h-[42px] px-8 bg-white border border-[#D2D2D2] backdrop-blur-[220px] flex justify-between items-center hover:cursor-pointer">
        <div className="logo-container w-[130px] h-[5vh] min-h-[24px] relative  bg-[#FFF]">
          <div className="Rectangle7391 w-[9vw] h-[4.5vh] min-h-[24px] relative bg-[#0F0F36] rounded-[6px]" />
          <div className="logo w-[9vw] h-[4vh] min-h-[24px] absolute left-[0px] top-[1px] bg-none flex justify-center items-center gap-[0.3vw]" >
            <img className="Aspireit w-[1.5vw] bg-transparent shrink-0" src={image1} />
            <img className="Group1000007770 bg-transparent w-[5vw] h-[2vh] shrink-0" src={image2} />
          </div>
        </div>
        <div className="SearchBarContainer w-full flex grow justify-center items-center gap-4 bg-none">
          <div className='InputContainer w-[55%] flex justify-start items-center gap-4 h-[5vh] min-h-[24px] pl-6 pr-6 bg-[#EBEBEB] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[32px]' >
            <div className='searchBar inline-flex items-center h-[5vh] w-full bg-[#EBEBEB]'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className={`w-[3vh] h-[3vh] shrink-0 rounded-full mr-1 ${isFocused1 ? 'transform scale-110 transition-transform duration-300' : ''}`}   >
                <path d="M9.49996 2.75C8.16495 2.75 6.85991 3.14588 5.74989 3.88757C4.63986 4.62927 3.7747 5.68347 3.26381 6.91686C2.75292 8.15026 2.61925 9.50745 2.8797 10.8168C3.14015 12.1262 3.78302 13.3289 4.72702 14.2729C5.67102 15.2169 6.87375 15.8598 8.18311 16.1202C9.49248 16.3807 10.8497 16.247 12.0831 15.7361C13.3165 15.2252 14.3707 14.3601 15.1124 13.25C15.854 12.14 16.2499 10.835 16.2499 9.49996C16.2498 7.70979 15.5386 5.99298 14.2728 4.72714C13.0069 3.46131 11.2901 2.75011 9.49996 2.75Z" stroke="#353535" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M14.666 14.668L18.3327 18.3346" stroke="#353535" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
              </svg>
              <input
                className='justify-start px-2 w-full max-w-[657px] text-[#353535] py-[0.5vh] text-[2vh] leading-[18px] border-0 bg-[#EBEBEB] focus:outline-none focus:text-[#353535]'
                onClick={focusInput}
                type="text" name='searchBar'
                value={isFocused1 ? searchPhrase : ''}
                onChange={handleSearch}
                onFocus={() => setisFocused1(true)}
                onBlur={() => setisFocused1(false)}
                placeholder='Search'
                ref={inputRef} />
            </div>
          </div>
        </div>

        <div className="Frame1000008205 flex justify-start items-center w-fit gap-[1vw] bg-none" >
          <div className="Frame1000008204 px-[2vh] py-[2px] bg-[#EBEBEB] flex justify-start items-center shadow-[0px_0px_6px_rgba(0,_0,_0,_0.25)] rounded-[40px] backdrop-blur-[4px]">
            <div className="ButtonsNotification w-[5vh] min-w-[24px] h-[5vh] min-h-[24px] mr-[1.5vh] relative bg-[#EBEBEB]" >
              <div className="Ellipse w-[5vh] h-[5vh] min-w-[24px] min-h-[24px] absolute left-0 top-0 bg-white rounded-full" />
              <div className="IconsBell w-[4vh] h-[4vh] min-w-[18px] min-h-[18px] absolute left-[1vh] top-[1vh] bg-none hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className='w-[3vh] h-[3vh] min-w-[16px] min-h-[16px]'>
                  <path d="M21 6.50001C21 8.43001 19.43 10 17.5 10C15.57 10 14 8.43001 14 6.50001C14 4.57001 15.57 3.00001 17.5 3.00001C19.43 3.00001 21 4.57001 21 6.50001ZM19 11.79C18.5 11.92 18 12 17.5 12C16.0421 11.9974 14.6447 11.4171 13.6138 10.3862C12.583 9.3553 12.0026 7.95788 12 6.50001C12 5.03001 12.58 3.70001 13.5 2.71001C13.3185 2.48755 13.0897 2.30838 12.8302 2.18555C12.5707 2.06272 12.2871 1.99934 12 2.00001C10.9 2.00001 10 2.90001 10 4.00001V4.29001C7.03 5.17001 5 7.90001 5 11V17L3 19V20H21V19L19 17V11.79ZM12 23C13.11 23 14 22.11 14 21H10C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23Z" fill="#0072DC" />
                </svg>
              </div>
            </div>
            <div className="Profile flex justify-end items-center bg-[#EBEBEB] hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300" >
              <img className="AvatarPic w-[5vh] min-w-[24px] bg-none rounded-full" src={image3} />
            </div>
          </div>
          <div className="Ai w-[4.5vw] min-w-[42px] bg-none" >
            <img className="Layila h-[7.5vh] bg-none rounded-full hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300" src={image4} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[3vh]">
        <div className='overflow-hidden' style={{ width: '90%', height: 320, paddingLeft: 56, paddingRight: 56, paddingTop: 40, paddingBottom: 40, background: 'linear-gradient(302deg, #5C9AFF 0%, #154DD1 75%), linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)', boxShadow: '0px 0px 24px rgba(211, 136, 255, 0.45)', borderRadius: 32, border: '1px #DCFFFF solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
          {/* Yesterday's Progress Section */}
          <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
            <div className="font-['SF UI  Display']" style={{ textAlign: 'center', color: 'white', fontSize: 28, fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>Yesterday’s Progress</div>
            <div style={{ alignSelf: 'stretch', height: 208, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex', overflowY: 'scroll', paddingRight: 20, boxSizing: 'border-box' }}>
              {progress.yesterdaysProgress.map((item, index) => (
                <div key={index} style={{ alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background: 'rgba(255, 255, 255, 0.16)', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)', borderRadius: 12, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                  <div style={{ width: 32, height: 32, position: 'relative' }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Medal ">
                        <path id="Vector" d="M16 8.63605C22.6275 8.63605 28 13.8662 28 20.318C28 26.7698 22.6275 32 16 32C9.37258 32 4 26.7698 4 20.318C4 13.8662 9.37258 8.63605 16 8.63605ZM16 13.7469L14.0162 17.6599L9.58038 18.2874L12.7902 21.3333L12.0325 25.6342L16 23.6036L19.9675 25.6342L19.2099 21.3333L22.4197 18.2874L17.9838 17.6599L16 13.7469ZM17.5 1.33334L25 1.3348V5.71555L22.9549 7.37667C21.2958 6.52995 19.4537 5.97672 17.5016 5.78782L17.5 1.33334ZM14.5 1.33334L14.4995 5.7877C12.5476 5.97641 10.7057 6.52944 9.04661 7.37591L7 5.71555V1.3348L14.5 1.33334Z" fill="#C8F5F5" />
                      </g>
                    </svg>
                  </div>
                  <div className="font-['SF UI  Text']" style={{ flex: '1 1 0', color: 'white', fontSize: 18, fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word' }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Goals Section */}
          <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
            <div className="font-['SF UI  Display']" style={{ textAlign: 'center', color: 'white', fontSize: 28, fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>Today's Goals</div>
            <div style={{ alignSelf: 'stretch', height: 208, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex', overflowY: 'scroll', paddingRight: 20, boxSizing: 'border-box' }}>
              {progress.todaysGoals.map((goal, index) => (
                <div key={index} style={{ alignSelf: 'stretch', paddingLeft: 20, paddingTop: 12, paddingBottom: 12, background: 'rgba(255, 255, 255, 0.16)', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)', borderRadius: 12, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                  <div style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <div style={{ width: 32, height: 32, position: 'relative' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M16.4993 2.66663C9.15268 2.66663 3.16602 8.65329 3.16602 16C3.16602 23.3466 9.15268 29.3333 16.4993 29.3333C23.846 29.3333 29.8327 23.3466 29.8327 16C29.8327 8.65329 23.846 2.66663 16.4993 2.66663ZM22.2994 20.76C22.1127 21.08 21.7793 21.2533 21.4327 21.2533C21.2593 21.2533 21.086 21.2133 20.926 21.1066L16.7927 18.64C15.766 18.0266 15.006 16.68 15.006 15.4933V10.0266C15.006 9.47996 15.4593 9.02663 16.006 9.02663C16.5527 9.02663 17.006 9.47996 17.006 10.0266V15.4933C17.006 15.9733 17.406 16.68 17.8193 16.92L21.9527 19.3866C22.4327 19.6666 22.5927 20.28 22.2994 20.76Z"
                          fill="#C3C3EA"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="font-['SF UI  Text']" style={{ flex: '1 1 0', color: 'white', fontSize: 18, fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word' }}>
                    {goal}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="flex justify-center mt-[3vh] gap-12 w-[90%]">

          {/* <---------------- Score Graph -----------------> */}

          <div
            className="h-[530px] py-[2vw] px-[4vw] bg-white/30 rounded-[4vw] shadow-[0px_0.5vw_1.5vw_0px_rgba(0,0,0,0.25)] border border-[#d388ff] backdrop-blur-lg flex-col justify-start items-start gap-[3vh] inline-flex"
          >
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="w-full flex-col justify-start items-start gap-[1vh] inline-flex pl-2">
                <div className="justify-start items-center gap-[1vw] inline-flex">
                  <div className="text-center text-[#bf4cf9] text-[28px] font-bold font-['SF UI Display']"
                    style={{
                      background: 'linear-gradient(90deg, #BF4CF9 0%, #4274FE 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                    Top candidates
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-[0.5vh] flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="py-[0.5vh] justify-center items-center gap-[1vw] flex">
                      <div className="text-center text-[#6f6f6f] text-[2.2vh] font-normal font-['SF UI Text'] leading-[2.8vh]">
                        Job designation : &nbsp;
                      </div>
                    </div>
                    <div className="py-[0.5vh] justify-center items-center gap-[1vw] flex">
                      <div className="text-center text-[#bf4cf9] text-[2.2vh] font-semibold font-['SF UI Text'] leading-[2.8vh]"
                        style={{
                          background: 'linear-gradient(90deg, #BF4CF9 0%, #4274FE 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}>
                        UI/UX Designer
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-[#6f6f6f] text-[2.2vh] font-normal font-['SF UI Text'] leading-[2.5vh]">
                    Posted On: {currentScores?.postedOn || "N/A"}
                  </div>
                </div>
              </div>
              <div className="w-[55vh] px-[1.5vh] mt-1 bg-neutral-100 rounded-[2.5vw] shadow-[0px_0px_1vw_0px_rgba(0,0,0,0.25)] justify-start items-center gap-[1vw] flex">
                <Select
                  defaultValue={options[0]} // Set the default value to the first option
                  options={options}
                  styles={customStyles}
                  onChange={handleChangeOption}
                  value={options.find(option => option.value === option)} // Ensure value fallback to first option
                />
                {/* <div className="w-[3vw] h-[3vw] flex-col justify-center items-center gap-[1vw] inline-flex" /> */}
              </div>
            </div>
            <div className="self-stretch h-[60vh] py-[2vh] bg-none rounded-[3vw] shadow-[0px_0.5vw_1.5vw_0px_rgba(0,0,0,0.25)] border border-[#dcffff] flex-col justify-center items-center flex">
              {/* responsive bar code place here */}
              <ResponsiveLine
                data={lineData}
                margin={{ top: 40, right: 50, bottom: 60, left: 60 }}
                xScale={{ type: "point", }}
                yScale={{ type: "linear", min: 80, max: 100, }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickPadding: 5,
                  legend: "Top Candidates",
                  legendPosition: "middle",
                  legendOffset: 45,
                  
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  legend: "Scores",
                  legendPosition: "middle",
                  legendOffset: -45,
                  tickValues: [80, 85, 90, 95, 100],
                }}
                gridXValues={[]}
                gridYValues={[80, 85, 90, 95, 100]}
                pointSize={10}
                pointBorderWidth={2}
                pointColor="#4B94F6"
                pointBorderColor="#4B94F6"
                pointLabelYOffset={-12}
                useMesh={true}
                animation={true}
                colors={{ datum: 'color' }}
                theme={{
                  axis: {
                    legend: {
                      text: {
                        fontSize: 16,
                        fill: "#55557C",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>


          {/* <-------------- progress card ---------------> */}

          <div className="w-[35vw] min-w-[360px] max-h-[530px] relative bg-white/30 rounded-[32px] py-[24px] px-[48px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.25)] border border-[#d388ff] backdrop-blur-lg flex flex-col">
            <div className="h-[102px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[60px] flex-col justify-start items-start flex">
                <div className="p-1 justify-start items-center gap-2 inline-flex">
                  <div className="text-center text-[#6f6f6f] text-base font-normal font-['SF UI Text'] uppercase leading-none tracking-wide">
                    Progress Report for
                  </div>
                </div>
                <div className="self-stretch px-1 justify-start items-center inline-flex">
                  <div className="py-1 justify-center items-center gap-2 flex">
                    <div
                      className="text-center text-[#bf4cf9] text-[28px] font-bold font-['SF UI Display']"
                      style={{
                        background: 'linear-gradient(90deg, #BF4CF9 0%, #4274FE 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Marketing Manager
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch px-1 justify-start items-center inline-flex">
                <div className="py-1 justify-center items-center gap-2 flex">
                  <div className="text-center text-[#6f6f6f] text-lg font-normal font-['SF UI Text'] leading-[18px]">
                    Posted on
                  </div>
                </div>
                <div className="p-1 justify-center items-center gap-2 flex">
                  <div className="text-center text-[#6f6f6f] text-lg font-normal font-['SF UI Text'] leading-[18px]">:</div>
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="py-1 justify-center items-center gap-2 flex">
                    <div className="text-center text-[#6f6f6f] text-lg font-normal font-['SF UI Text'] leading-[18px]">
                      {rounds.marketingManager.postedOn}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[250px] w-[1px] bg-[#A5A5CC] left-[68px] top-[175px] absolute flex-col justify-start items-start gap-10 inline-flex'></div>
            {/* <div className="left-[468px] top-[273px] absolute flex-col justify-center items-start gap-2 inline-flex">
              <div className="w-3 h-3 bg-[#2890fa] rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]" />
              <div className="w-3 h-3 bg-[#d9d9d9] rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]" />
            </div> */}
            <div className="px-4 pb-8 left-[32px] flex-col justify-start items-start gap-10 inline-flex mt-14">
              {roundsList.map(({ label, key, isActive }) => {
                const status =
                  rounds.marketingManager[key] === 1 ? 'completed' : isActive ? 'active' : 'pending';

                return (
                  <div key={key} className="self-stretch justify-start items-center gap-6 inline-flex">
                    <div
                      className={`w-[18px] h-[18px] relative rounded-[100px] ${statusStyles[status].circle}`}
                      style={isActive ? { boxShadow: statusStyles[status].gradient } : {}}
                    />
                    <div
                      className={`text-center text-xl font-normal font-['SF UI Text'] leading-tight ${statusStyles[status].text}`}
                      style={isActive ? { background: statusStyles[status].gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}}
                    >
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='w-full flex justify-end'>
              <div className="h-14 px-5 bg-[#0071db] rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-[2.5vh] font-['SF UI  Text'] leading-[18px] cursor-pointer">Intervene</div>
              </div>
            </div>

          </div>
        </div>


        <div className='flex justify-center mt-[3vh] gap-12 w-[90%]'>

          {/* <------------------ Scheduled Interview------------------> */}

          <div className="p-8 bg-white/30 rounded-[32px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.25)] backdrop-blur-lg flex-col justify-center items-end gap-6 inline-flex flex-grow" style={{ border: '0.5px solid var(--Gradients-Gradient-Blue-to-pink, #D388FF)' }}>
            <div className="self-stretch h-48 flex-col justify-center items-center gap-6 flex">
              <div className="self-stretch h-9 flex-col justify-start items-start flex">
                <div className="self-stretch h-9 flex-col justify-start items-start flex">
                  <div className="p-1 justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-[#55557c] text-[28px] font-bold font-['SF UI Display'] leading-7">Scheduled Interview</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[132px] py-1 flex-col justify-start items-start gap-3 flex">
                {Object.entries(schedule).map(([type, meetings]) =>
                  meetings.map((meeting, index) => (
                    <div
                      key={index}
                      className="self-stretch px-5 py-2 bg-white/30 rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.25)] border border-[#dcffff] justify-start items-center gap-4 inline-flex"
                    >
                      <img
                        className="w-10 h-10 rounded-full shadow-[0px_0px_8px_0px_rgba(0,0,0,0.40)]"
                        src={type === 'meet' ? googleMeet : zoom}
                        alt={type === 'meet' ? 'Google Meet' : 'Zoom'}
                      />
                      <div className="grow shrink basis-0 text-[#55557c] text-[18px] font-normal font-['SF UI  Text'] leading-normal">
                        {meeting}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="h-14 px-5 bg-[#0071db] rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-[18px] font-semibold font-['SF UI  Text'] leading-[18px] cursor-pointer">Continue</div>
            </div>
          </div>

          {/* <------------- AI summary --------------> */}

          <div className='w-[35vw]' style={{ height: '100%', padding: 32, background: 'linear-gradient(302deg, #5C9AFF 0%, #154DD1 75%), linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)', boxShadow: '0px 0px 24px rgba(211, 136, 255, 0.45)', borderRadius: 32, border: '1px #DCFFFF solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex', flexDirection: 'column' }}>
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className=" justify-start items-center gap-1 inline-flex">
                <div className="w-8 h-8 pl-1 pr-[2.67px] pt-[1.33px] pb-[1.44px] justify-center items-center flex">
                  <div className="w-[25.33px] h-[29.23px] relative flex items-center justify-center">
                    <svg className="toogleIcon w-[20px] h-[22px] mr-2 bg-none" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0233 7.54762C13.2639 6.89742 14.1835 6.89742 14.4241 7.54762L16.4602 13.05C16.6871 13.6633 17.1706 14.1468 17.7839 14.3737L23.2863 16.4098C23.9365 16.6504 23.9365 17.57 23.2863 17.8106L17.7839 19.8467C17.1706 20.0736 16.6871 20.5571 16.4602 21.1704L14.4241 26.6727C14.1835 27.3229 13.2639 27.3229 13.0233 26.6727L10.9872 21.1704C10.7603 20.5571 10.2768 20.0736 9.66352 19.8467L4.16114 17.8106C3.51094 17.57 3.51095 16.6504 4.16115 16.4098L9.66352 14.3737C10.2768 14.1468 10.7603 13.6633 10.9872 13.05L13.0233 7.54762Z" fill="white" />
                      <path d="M22.4776 19.15C22.5979 18.8249 23.0577 18.8249 23.178 19.15L23.5786 20.2325C23.6164 20.3347 23.697 20.4153 23.7992 20.4531L24.8817 20.8537C25.2068 20.974 25.2068 21.4338 24.8817 21.5541L23.7992 21.9546C23.697 21.9925 23.6164 22.073 23.5786 22.1752L23.178 23.2577C23.0577 23.5828 22.5979 23.5828 22.4776 23.2577L22.0771 22.1752C22.0392 22.073 21.9587 21.9925 21.8564 21.9546L20.774 21.5541C20.4489 21.4338 20.4489 20.974 20.774 20.8537L21.8564 20.4531C21.9587 20.4153 22.0392 20.3347 22.0771 20.2325L22.4776 19.15Z" fill="white" />
                      <path d="M6.1654 2.22633C6.40599 1.57613 7.32563 1.57613 7.56622 2.22633L8.36089 4.3739C8.43654 4.57832 8.59771 4.7395 8.80213 4.81514L10.9497 5.60981C11.5999 5.85041 11.5999 6.77004 10.9497 7.01064L8.80213 7.80531C8.59771 7.88095 8.43654 8.04213 8.36089 8.24655L7.56622 10.3941C7.32563 11.0443 6.40599 11.0443 6.1654 10.3941L5.37072 8.24655C5.29508 8.04213 5.13391 7.88095 4.92949 7.80531L2.78192 7.01064C2.13172 6.77004 2.13172 5.85041 2.78192 5.60981L4.92949 4.81514C5.13391 4.7395 5.29508 4.57832 5.37072 4.3739L6.1654 2.22633Z" fill="white" />
                      <path d="M19.8153 5.31396L20.5782 7.37565C20.6916 7.68228 20.9334 7.92404 21.24 8.0375L23.3017 8.80039L21.24 9.56328C20.9334 9.67674 20.6916 9.9185 20.5782 10.2251L19.8153 12.2868L19.0524 10.2251C18.9389 9.9185 18.6972 9.67674 18.3905 9.56328L16.3289 8.80039L18.3905 8.0375C18.6972 7.92404 18.9389 7.68228 19.0524 7.37564L19.8153 5.31396Z" fill="white" />
                      <path d="M6.87154 21.5679C7.13433 21.3418 7.53653 21.5647 7.48418 21.9074L7.20733 23.7196C7.19087 23.8273 7.2223 23.9369 7.29337 24.0195L8.48888 25.4093C8.71494 25.6721 8.49207 26.0743 8.1494 26.022L6.33716 25.7451C6.22943 25.7287 6.11988 25.7601 6.03726 25.8312L4.64744 27.0267C4.38464 27.2527 3.98245 27.0299 4.0348 26.6872L4.31165 24.875C4.32811 24.7672 4.29668 24.6577 4.22561 24.575L3.03009 23.1852C2.80404 22.9224 3.02691 22.5202 3.36958 22.5726L5.18181 22.8494C5.28955 22.8659 5.3991 22.8345 5.48172 22.7634L6.87154 21.5679Z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <div className="text-center text-white text-[28px] font-bold font-['SF UI  Text'] leading-normal">AI Summary</div>
                </div>
              </div>
              <ul className="self-stretch text-white font-normal font-['SF UI  Text'] leading-normal list-disc list-inside">
                <li className='text-[18px]'>
                  You have posted 15 jobs last week, your applicants growth is up by 35%.
                </li>
                <li className='text-[18px]'>
                  Your premium accounts expiring soon in 5 days.
                </li>
                <li className='text-[18px]'>
                  Content writer AI interview is yet to be scheduled.
                </li>
              </ul>
            </div>
            <div className="self-stretch justify-end items-center gap-4 inline-flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2696 1.07212C13.5606 1.19493 13.7643 1.45693 13.8166 1.76136L13.8298 1.91667V22.0833C13.8298 22.4525 13.6083 22.7858 13.2678 22.9287C12.976 23.0511 12.6457 23.0131 12.3914 22.8368L12.2712 22.7373L6.9075 17.4664H3.74925C2.32021 17.4664 1.14581 16.3758 1.01259 14.9813L1 14.7165V9.23666C1 7.80723 2.09034 6.63251 3.48448 6.49925L3.74925 6.48667H6.90977L12.2739 1.26006C12.5379 1.00288 12.9301 0.928848 13.2696 1.07212ZM18.8476 2.94183L19.0063 3.04963L19.1855 3.20467C19.3008 3.30831 19.4599 3.45844 19.6483 3.65411C20.0246 4.04496 20.5205 4.62088 21.0154 5.37482C22.0059 6.88386 23 9.12045 23 12.0074C23 14.8945 22.0057 17.1278 21.0147 18.6335C20.5196 19.3857 20.0235 19.9599 19.647 20.3495L19.3881 20.6079L19.0458 20.9177L18.9854 20.9674C18.5886 21.2818 18.0108 21.216 17.6965 20.8192C17.4178 20.4672 17.4389 19.9737 17.7242 19.6473L17.961 19.4319C18.0464 19.3555 18.1738 19.2361 18.3292 19.0754C18.6406 18.7531 19.0616 18.267 19.4839 17.6256C20.3272 16.3439 21.1672 14.4558 21.1672 12.0074C21.1672 9.55885 20.3272 7.66678 19.4832 6.38099C19.1313 5.84477 18.7801 5.4165 18.4924 5.10129L18.1823 4.77812L17.8444 4.46753C17.4491 4.15208 17.3829 3.57493 17.698 3.17906C17.9782 2.82701 18.4648 2.7362 18.8476 2.94183ZM17.0162 6.60831L17.1987 6.73616L17.4437 6.96668L17.5427 7.07051C17.7508 7.29496 18.0191 7.62375 18.2849 8.06095C18.8191 8.94008 19.3362 10.248 19.3362 11.9973C19.3362 13.7466 18.8191 15.0559 18.2852 15.9363C18.0198 16.3741 17.7515 16.7038 17.5437 16.9287L17.3575 17.1199L17.2287 17.2391L17.1558 17.3009L17.0395 17.3537C16.7968 17.4509 16.2294 17.6094 15.8679 17.157C15.5884 16.8072 15.6065 16.3157 15.8879 15.988L16.1343 15.7511L16.1974 15.6846C16.334 15.5369 16.5248 15.3045 16.7181 14.9855C17.1023 14.3522 17.5033 13.3678 17.5033 11.9973C17.5033 10.6269 17.1023 9.64456 16.7187 9.01331C16.5737 8.7748 16.4302 8.585 16.3101 8.44301L16.1355 8.25074L16.0099 8.13157C15.6164 7.81766 15.5517 7.24198 15.8666 6.84602C16.1467 6.49385 16.6332 6.40284 17.0162 6.60831Z" fill="white" />
              </svg>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7368 1H4.10526C2.94211 1 2 1.895 2 3V17H4.10526V3H16.7368V1ZM19.8947 5H8.31579C7.15263 5 6.21053 5.895 6.21053 7V21C6.21053 22.105 7.15263 23 8.31579 23H19.8947C21.0579 23 22 22.105 22 21V7C22 5.895 21.0579 5 19.8947 5ZM19.8947 21H8.31579V7H19.8947V21Z" fill="white" />
              </svg>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RecruiterDashboard;