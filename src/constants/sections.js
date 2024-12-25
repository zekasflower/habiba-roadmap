// ICONS
import youtube_icon from '@/assets/icons/youtube.svg'
import twitter_icon from '@/assets/icons/twitter.svg'
import coursera_icon from '@/assets/icons/coursera.svg'
import spotify_icon from '@/assets/icons/spotify.svg'
import udemy_icon from '@/assets/icons/udemy.svg'
import edrak_icon from '@/assets/icons/edrak.png'

// IMAGES
import uiuxImage from '@/assets/images/uiux.jpeg'
import edrakImage from '@/assets/images/edrak.jpeg'
import googleImage from '@/assets/images/google.jpeg'
import islamImage from '@/assets/images/islam-hefney.jpeg'
import arabicImage from '@/assets/images/arabic-ch.png'
import englishImage from '@/assets/images/english-ch.png'
import osamaImage from '@/assets/images/osama.jpeg'
import udemyImage from '@/assets/images/udemy.jpeg'
import letterCastImage from '@/assets/images/letter-cast.png'

export const ROADMAP_SECTIONS = [
  {
    id: 1001,
    html_inject: `
      <p>مساء الخير</p>
      <p>ناس كتير جدا دخلت بعتت ليا عن بدأت ازاي و ال roadmap المشيت عليها و اعد كام شهر و أسئله كتير في ال UI UX و مجال التيك عموما هجاوب علي أسالتكم و علي كل حاجه عايزين تعرفوها في ثريد كبير شويه</p>
      <p><br/></p>
      <p>بسم الله الرحمن الرحيم و نبدا الثريد , هحاول علي قد ما اقدر اديكم المفيد والخلاصه واختصر تجربتي</p>
      <p>وفي الاول و الاخر الموضوع ما هو الا توفيق من الله</p>
      <p>و ثانيا الاستمراريه و السعي المهم نبدا بقا </p>
      <p>
        دا لينك الثريد:
        <a href="https://x.com/MakizeninMaki/status/1860697872242548910" target="_blank">
          <img src="${ twitter_icon }" class="inline-flex" />
        </a>
      </p>
    `
  },
  {
    id: 1002,
    has_thumbnail: true,
    thumbnail: uiuxImage,
    thumbnail_url: '#',
    html_inject: `
      <p>ثريد ازاي تبدا في  تراك UI UX بدون لف و دوران كتير</p>
      <p>اولا</p>
      <p>UI =  User Interface = واجهة المستخدم</p>
      <p>UX = User Experience = تجربة المستخدم</p>
    `
  },
  {
    id: 1003,
    has_thumbnail: true,
    thumbnail: edrakImage,
    thumbnail_url: 'https://www.edraak.org/programs/specialization/uiux-v1/',
    html_inject: `
      <p>نبدأ با ux لو عايز تبدا مذاكره فيه ارشح كبدايه ادراك
      سهله جدا في البدايه و حلو منزلين دوره كامله</p>
      <p>( مبادىء تصميم تجربة وواجهة المستخدم UI/UX )</p>
      <p>
        و مجانيه  و ده جزء منها:
        <a href="https://www.edraak.org/programs/specialization/uiux-v1/" target="_blank">
          <img src="${ edrak_icon }" class="inline-flex h-5 mt-0.5" />
        </a>
      </p>
    `
  },
  {
    id: 1004,
    has_thumbnail: true,
    thumbnail: googleImage,
    thumbnail_url: 'https://www.coursera.org/professional-certificates/google-ux-design#courses',
    html_inject: `
      <p>
        و في من google بتقدم Professional Certificate في ال UX Design علي  coursera متقسمه الي  7 كورسات كل ما تخلص كورس بتاخد شهاده و لما تخلص كلهم بتاخد Professional Certificate انك خلصتهم كلهم و كده المهم ان بفلوس بس تقدروا تقدموا علي الدعم المادي
      </p>
      <p><br/></p>
      <p>
        وبيخصم ٩٠ في الميه من سعر الكورس الواحد يعني في حدود ٥ دولار كده ده لو عايز تاخد الشهاده ممكن تاخده مجاني بس مش هتستلم الشهاده بعد ما تخلص
      </p>
      <p>
        رابط الكورس:
        <a href="https://www.coursera.org/professional-certificates/google-ux-design#courses" target="_blank">
          <img src="${ coursera_icon }" class="inline-flex h-4" />
        </a>
      </p>
    `
  },
  {
    id: 1005,
    html_inject: `
      <p>
        طبعا غير الاطلاع الدائم و الكتب في كتب كتير جدا حلو ممكن تبصوا عليها  في ال ux
      </p>
      <p><br/></p>
      <p>و قبل ما ندخل في بوينت ال ui</p>
      <p>
        ادتكم في ال ux الهيحطكم علي بدايه الطريق و هيفدكم بجد
        بعد كده هتتعمقوا اكتر و اكثر و هتقروا اكتر و تتعلموا و تعرفوا اكتر في المجال
      </p>
      <p><br/></p>
      <p>و بوينت تانيه لازم احنا بنستعمل tools زي فيجما و ادوبي XD بس حاليا التركيز كله علي فيجما المهم</p>
    `
  },
  {
    id: 1006,
    has_thumbnail: true,
    thumbnail: islamImage,
    thumbnail_url: 'https://www.youtube.com/@islamhefney/playlists',
    html_inject: `
      <p>هرشحلكم ناس استفد منها بجد في ال UI نبدا با Islam Hefney </p>
      <p><br/></p>
      <p>
      انا مهما اتكلمت و مهما قولت لن اوفيه حقه بدا يعني عظيم جدا  استفدت منه جدا بجد و حرفيا النور في اخر النفق😭   هتلاقوه عامل Playlists بيشرح فيها بردو UX Design Process
      </p>
      <p>
        رابط القناة:
        <a href="https://www.youtube.com/@islamhefney/playlists" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
    `
  },
  {
    id: 1007,
    has_thumbnail: true,
    thumbnail: arabicImage,
    thumbnail_url: 'https://www.youtube.com/@AhmadMSekmani/featured',
    html_inject: `
      <p>وفي المحتوي العربي </p>
      <p><br/></p>
      <p>
      قناة Ahmad Sekmani:
        <a href="https://www.youtube.com/@AhmadMSekmani/featured" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
      <p><br/></p>
      <p>
      قناة أصيل | uxAseel: 
        <a href="https://www.youtube.com/@uxAseel" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
      <p><br/></p>
      <p>
      قناة Ehab Fayez:
        <a href="https://www.youtube.com/@ehabfayez/videos" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
      <p><br/></p>
      <p>
      قناة Anas Rafaat | أنس رأفت: 
        <a href="https://www.youtube.com/@anasrafaat" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
    `
  },
  {
    id: 1008,
    has_thumbnail: true,
    thumbnail: englishImage,
    thumbnail_url: 'https://www.youtube.com/@FluxAcademy',
    html_inject: `
      <p>في المحتوي الاجنبي</p>
      <p><br/></p>
      <p>
      قناة Flux Academy: 
        <a href="https://www.youtube.com/@FluxAcademy" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
      <p><br/></p>
      <p>
      قناة Mizko: 
        <a href="https://www.youtube.com/@mizko" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
      <p><br/></p>
      <p>
      قناة TD Sunshine:
        <a href="https://www.youtube.com/@TDSunshine" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
      <p>(😭 انا بحب البنت دي موت بجد مسكره خالص )</p>
      <p><br/></p>
      <p>
      قناة UI Adrian: 
        <a href="https://www.youtube.com/@uiadrian" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
    `
  },
  {
    id: 1009,
    has_thumbnail: true,
    thumbnail: osamaImage,
    thumbnail_url: 'https://www.youtube.com/@osamaeldrieny/playlists',
    html_inject: `
      <p>و طبعا لا ننسى أحسن حد شرح Design Tokens و  Variables </p>
      <p><br/></p>
      <p>
      قناة Osama ElDrieny:
        <a href="https://www.youtube.com/@osamaeldrieny/playlists" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex -mt-1.5" />
        </a>
      </p>
    `
  },
  {
    id: 1010,
    has_thumbnail: true,
    thumbnail: udemyImage,
    thumbnail_url: 'https://www.udemy.com/',
    html_inject: `
      <p>
      و كمان هتلاقوا كورسات كتير حلوه علي udemy و متتفزعوش من الاسعار بيعملوا offers حلوه اول بأول
      </p>
      <p>
      الرابط:
        <a href="https://www.udemy.com/" target="_blank">
          <img src="${ udemy_icon }" class="inline-flex -mt-1.5 h-6" />
        </a>
      </p>
    `
  },
  {
    id: 1011,
    has_thumbnail: true,
    thumbnail: letterCastImage,
    thumbnail_url: 'https://open.spotify.com/show/79azegzggC08byz7qy9FtZ?si=9e24dff02b354d7d&nd=1&dlsi=c86182c45d2c46b9',
    html_inject: `
      <p>البودكاست ده جميل جدا جدا</p>
      <p>
      انصح بيه موجود علي سبوتفاي:
        <a href="https://open.spotify.com/show/79azegzggC08byz7qy9FtZ?si=9e24dff02b354d7d&nd=1&dlsi=c86182c45d2c46b9" target="_blank">
          <img src="${ spotify_icon }" class="inline-flex -mt-1 h-6" />
        </a>
      </p>
    `
  },
  {
    id: 1012,
    html_inject: `
      <p>و تابعوا ناس في المجال و ديما خليكم علي اطلاع علي كل ما هو جديد</p>
      <p>وديما اجتهدوا عشان تطوروا من نفسكم و حاولوا تحضروا ايفينتات ديما</p>
      <p>
      اتمنى لكم كل التوفيق و النجاح و اهم حاجه الاستمراريه اي حاجه في الحياه بتقوم عليه و قبل اي حاجه علي توفيق ربنا فا استعينوا بالله وانطلقووو
      </p>
      <p><br/></p>
      <p>عموما ده الجه في دماغي و لما يجي اي حاجه تانيه او تقابلني اي حاجه هنزلها هنا كل التوفيق يا  designers </p>
      <p>🫡🫡🫡</p>
    `
  },
]