import ExperienceCard from "../fragments/ExperienceCard"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="flex justify-center bg-slate-50 py-24 px-5 xl:px-0" id="experience">
        <div className="w-[75rem]">
            <div className="flex flex-col justify-center items-center text-center">
                <div className="font-bold text-3xl sm:text-5xl text-slate-600 mb-10 flex items-center">
                    <motion.div
                        initial={{ translateY: -100, opacity: 0}}
                        whileInView={{ translateY: 0, opacity: 1}}
                        transition={{ delay: 0.2}}
                        viewport={{once: true}}
                    >
                        💼
                    </motion.div>
                    <span className="bg-gradient-to-r from-sky-300 to-slate-50 h-3 sm:h-5 w-44 sm:w-72 -rotate-2 absolute translate-x-10 sm:translate-x-16 translate-y-1 sm:translate-y-3 opacity-50"></span>
                    <h1 className="z-[10]">Experience</h1>
                </div>
                <p className="w-full sm:w-[35rem] leading-loose text-slate-500 text-lg">I have several experiences in the field of software engineering, including internships as a fullstack developer, independent studies, and part-time job as a frontend developer</p>
                <svg className="my-12" width="130" height="12" viewBox="0 0 130 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2629 0.0812639C8.9439 0.303213 7.72882 0.731392 6.76512 1.31433C5.69257 1.96291 0.734984 6.51311 0.307015 7.24166C-0.0758563 7.89351 -0.106283 9.26252 0.24761 9.91541C0.934026 11.1811 2.48906 11.8198 4.02724 11.468C4.86145 11.2772 5.20284 11.0217 7.60186 8.79288C11.5266 5.14653 11.6756 5.13893 15.4234 8.39372C18.9212 11.4314 20.6237 12.1321 24.0697 11.9523C27.1198 11.7931 28.41 11.16 31.8582 8.13084C35.1693 5.22201 35.4854 5.23376 39.1341 8.40184C42.6268 11.4347 44.3305 12.133 47.7954 11.9523C50.8073 11.7952 52.185 11.1184 55.576 8.13118C58.9621 5.14843 59.1338 5.1626 63.2836 8.7706C66.0964 11.2162 67.9423 12 70.888 12C73.9725 12 75.6941 11.2271 78.9864 8.36488C82.5829 5.23808 82.9001 5.22719 86.192 8.12047C89.6139 11.1279 90.9701 11.7952 93.9805 11.9523C97.4472 12.1332 99.1527 11.4345 102.648 8.40132C106.3 5.23203 106.615 5.22011 109.918 8.12825C113.32 11.1238 114.653 11.7858 117.615 11.9513C119.512 12.0573 120.893 11.7834 122.597 10.9631C123.882 10.3445 128.95 5.81393 129.614 4.69003C130.76 2.74914 129.218 0.427573 126.781 0.427573C126.257 0.427573 125.58 0.554697 125.258 0.713429C124.939 0.870607 123.533 2.06188 122.133 3.36092C118.403 6.82194 118.159 6.83369 114.609 3.72209C111.301 0.822417 109.62 0.0541463 106.567 0.044992C103.354 0.0353195 101.749 0.707557 98.7215 3.33225C95.7924 5.87145 95.8947 5.79597 95.1614 5.95384C94.0031 6.2029 93.4243 5.89563 90.8433 3.66077C87.4777 0.746765 85.804 0.00474772 82.6603 0.0327288C79.5196 0.0605372 78.0336 0.732256 74.6696 3.64488C72.0737 5.89235 71.4947 6.20204 70.3484 5.95557C69.5756 5.78923 69.6555 5.84727 66.875 3.43744C63.7545 0.732947 62.1784 0.0498282 59.0251 0.0354922C55.983 0.0215016 54.2164 0.816026 50.9095 3.68582C48.3648 5.89425 47.778 6.20411 46.6146 5.95384C45.8812 5.79597 45.9836 5.87145 43.0544 3.33225C40.0268 0.707557 38.4223 0.0353195 35.2088 0.044992C32.1444 0.0541463 30.5108 0.804972 27.1109 3.767C23.5035 6.90986 23.4414 6.9052 19.153 3.16903C17.3138 1.56668 16.1735 0.861453 14.7431 0.441909C13.4061 0.0496556 11.4074 -0.111149 10.2629 0.0812639Z" fill="#155E75"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2629 0.0812639C8.9439 0.303213 7.72882 0.731392 6.76512 1.31433C5.69257 1.96291 0.734984 6.51311 0.307015 7.24166C-0.0758563 7.89351 -0.106283 9.26252 0.24761 9.91541C0.934026 11.1811 2.48906 11.8198 4.02724 11.468C4.86145 11.2772 5.20284 11.0217 7.60186 8.79288C11.5266 5.14653 11.6756 5.13893 15.4234 8.39372C18.9212 11.4314 20.6237 12.1321 24.0697 11.9523C27.1198 11.7931 28.41 11.16 31.8582 8.13084C35.1693 5.22201 35.4854 5.23376 39.1341 8.40184C42.6268 11.4347 44.3305 12.133 47.7954 11.9523C50.8073 11.7952 52.185 11.1184 55.576 8.13118C58.9621 5.14843 59.1338 5.1626 63.2836 8.7706C66.0964 11.2162 67.9423 12 70.888 12C73.9725 12 75.6941 11.2271 78.9864 8.36488C82.5829 5.23808 82.9001 5.22719 86.192 8.12047C89.6139 11.1279 90.9701 11.7952 93.9805 11.9523C97.4472 12.1332 99.1527 11.4345 102.648 8.40132C106.3 5.23203 106.615 5.22011 109.918 8.12825C113.32 11.1238 114.653 11.7858 117.615 11.9513C119.512 12.0573 120.893 11.7834 122.597 10.9631C123.882 10.3445 128.95 5.81393 129.614 4.69003C130.76 2.74914 129.218 0.427573 126.781 0.427573C126.257 0.427573 125.58 0.554697 125.258 0.713429C124.939 0.870607 123.533 2.06188 122.133 3.36092C118.403 6.82194 118.159 6.83369 114.609 3.72209C111.301 0.822417 109.62 0.0541463 106.567 0.044992C103.354 0.0353195 101.749 0.707557 98.7215 3.33225C95.7924 5.87145 95.8947 5.79597 95.1614 5.95384C94.0031 6.2029 93.4243 5.89563 90.8433 3.66077C87.4777 0.746765 85.804 0.00474772 82.6603 0.0327288C79.5196 0.0605372 78.0336 0.732256 74.6696 3.64488C72.0737 5.89235 71.4947 6.20204 70.3484 5.95557C69.5756 5.78923 69.6555 5.84727 66.875 3.43744C63.7545 0.732947 62.1784 0.0498282 59.0251 0.0354922C55.983 0.0215016 54.2164 0.816026 50.9095 3.68582C48.3648 5.89425 47.778 6.20411 46.6146 5.95384C45.8812 5.79597 45.9836 5.87145 43.0544 3.33225C40.0268 0.707557 38.4223 0.0353195 35.2088 0.044992C32.1444 0.0541463 30.5108 0.804972 27.1109 3.767C23.5035 6.90986 23.4414 6.9052 19.153 3.16903C17.3138 1.56668 16.1735 0.861453 14.7431 0.441909C13.4061 0.0496556 11.4074 -0.111149 10.2629 0.0812639Z" fill="url(#paint0_linear_67_501)" fillOpacity="0.3" ></path>
                </svg>
            </div>
            <div className="flex flex-col xl:flex-row gap-6">
                <motion.div className="w-full xl:w-[24rem]"
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.4, delay: 0.1}}
                    viewport={{once: true}}
                >
                    <ExperienceCard
                        title="Desnet Technology"
                        image="images/desnet.webp"
                        projectImg1="images/desnet2.png"
                        projectImg2="images/desnet1.png"
                        projectImg3="images/desnet3.png"
                        tech1="php"
                        tech2="codeigniter"
                        tech3="mysql"
                        description="Designed and developed a web application using CodeIgniter 4 to
                        manage items and mails within PT DES Teknologi Informasi.
                        Implemented features for list key features of the website,
                        adding/editing items, sending/receiving mails, user management."
                    />
                </motion.div>
                <motion.div className="w-full xl:w-[24rem]"
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.4, delay: 0.3}}
                    viewport={{once: true}}
                >
                    <ExperienceCard
                        title="Bangkit Dicoding"
                        image="images/bangkit.png"
                        projectImg1="images/bangkit1.png"
                        projectImg2="images/bangkit2.png"
                        projectImg3="images/bangkit3.png"
                        tech1="cloud computing"
                        tech2="GCP"
                        description="I’m joining Bangkit Academy by Kampus Merdeka MSIB Batch 6. Here
                        I learn anything about cloud computing using Google Cloud Platform. And we were assigned to work on a
                        capstone project in collaboration with Machine Learning and Mobile Development."
                    />
                </motion.div>
                <motion.div className="w-full xl:w-[24rem]"
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.4, delay: 0.5}}
                    viewport={{once: true}}
                >
                    <ExperienceCard
                        title="FN Digital Code"
                        image="images/fn.webp"
                        projectImg1="images/jepestore1.png"
                        projectImg2="images/jepestore2.png"
                        projectImg3="images/jepestore3.png"
                        tech1="next"
                        tech2="react"
                        tech3="astro"
                        description="I work here as a front end website developer. Collaborate with a very
                        competent team to create a game top up website, using technology
                        such as javascript, typescript, next js, and react js. Working together
                        using Jira and Github."
                    />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Experience