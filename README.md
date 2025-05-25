Proiectul este încărcat pe contul de GitHub:
https://github.com/ValentinaBozianu/SIMPRE_2025.git
Aplicatia este conectata la Vercel prin contul:
https://vercel.com/valentina-bozianus-projects/~/deployments
https://simpre-2025-six.vercel.app/
Proiectul este sincronizat pe AWS cu următoarea adresa de Elastic IP:
http://13.48.14.65/
Prezentarea aplicatiei:
https://youtu.be/YuOrhSROzB0?si=fAjkyO6PCeWJT-9L

Bozianu Valentina-Marilena
SIMPRE 1132
GARDEN DESIGN
Introducere
Într-o lume aflată în continuă dezvoltare digitală, aplicațiile web interactive au devenit instrumente importante în educație, organizare și comunicare. Proiectul Garden Design își propune să îmbine funcționalitatea practică cu o experiență vizuală plăcută, în contextul unei aplicații destinată design-ului floral, având o interacțiune asistată de inteligență artificială.
Aplicația Garden Design oferă utilizatorului posibilitatea de a vizualiza, adăuga și gestiona informații despre flori, precum și de a crea propria grădină digitală. Totodată, include un modul interactiv de tip chatbot, bazat pe inteligență artificială, care răspunde în mod automat la întrebări legate de flori, plante și îngrijirea acestora. Prin această funcție, aplicația nu mai este doar o bază de date pasivă, ci devine un mediu de explorare și conversație.
Dezvoltarea aplicației a fost realizată cu ajutorul platformei Next.js, iar pe partea de interfață, s-a folosit Tailwind CSS, un instrument care simplifică procesul de stilizare și permite crearea unor pagini adaptate automat pentru orice tip de ecran sau dispozitiv. Pentru stocarea datelor, s-a utilizat o bază de date de tip MongoDB, accesibilă printr-un serviciu cloud care oferă siguranță și flexibilitate. Pe lângă aceste elemente, aplicația a fost integrată cu un serviciu extern de inteligență artificială OpenAI care oferă un răspuns generat automat la întrebările utilizatorului.
Un alt element important al proiectului îl reprezintă funcționarea aplicației într-un mediu real de producție, fiind realizată cu ajutorul platformei Docker, ceea ce înseamnă că tot codul, împreună cu resursele necesare, pot fi rulate într-un mediu izolat și controlat, indiferent de sistemul de operare. Aplicația a fost testată și implementată pe o instanță oferită de Amazon Web Services (AWS), mai exact o instanță EC2, care funcționează ca un server virtual în cloud. Astfel, proiectul include nu doar dezvoltarea propriu-zisă, ci și aspecte de configurare, lansare și întreținere într-un mediu extern.
Aplicația are o structură simplă și intuitivă. Proiectul permite accesul controlat la anumite pagini și funcționalități, asigurând confidențialitatea datelor și o experiență personalizată. Utilizatorul are acces la o pagină principală, unde poate vedea florile deja adăugate, poate introduce informații noi, poate crea o listă de dorințe și poate explora sugestii florale prin intermediul chatbotului. Interacțiunea dintre utilizator și aplicație este fluidă, iar datele sunt salvate în mod automat în baza de date. Fiecare floare este însoțită de informații utile, cum ar fi denumirea, sezonul de înflorire, culoarea dominantă și eventuale sfaturi de îngrijire. Aplicația este gândită pentru a putea fi extinsă, ceea ce înseamnă că pe viitor pot fi adăugate funcții precum autentificarea utilizatorilor, sortarea pe categorii sau sugestii personalizate în funcție de preferințele anterioare.
Descrierea problemei
Într-o era digitală, oamenii își doresc din ce în ce mai mult să interacționeze cu informația într-un mod personalizat, vizual și intuitiv. Proiectul a fost construit pentru a răspunde unei nevoi specifice, aceea de a oferi utilizatorilor o modalitate simplă, dar interactivă, de a gestiona design-ul floral.
Proiectul Garden Design oferă un spațiu digital în care utilizatorul poate vizualiza flori, poate adăuga altele noi, poate crea o listă de dorințe și poate primi sugestii automate în funcție de interesele sale. Totul este prezentat într-o formă vizuală simplă, iar utilizatorul nu are nevoie de cunoștințe tehnice, toate acțiunile realizându-se cu ușurință printr-un meniu
intuitiv. Dincolo de funcționalitate, aplicația oferă și o componentă educațională: utilizatorul învață despre tipuri de flori, despre îngrijirea lor și despre combinații estetice posibile.
Aplicația permite generarea de răspunsuri automate pe baza întrebărilor adresate, cu ajutorul platformei OpenAI. Utilizatorul poate cere sugestii pentru flori care înfloresc primăvara, pentru combinații cromatice potrivite sau pentru plante ușor de întreținut. Astfel, aplicația nu este doar un instrument pasiv, ci un partener digital care interacționează și oferă suport în luarea deciziilor.
Proiectul răspunde acestei nevoi printr-o soluție modernă care poate fi adaptată cu ușurință pentru diverse alte domenii, precum plante de interior, idei de decor floral sau chiar recomandări de produse din comerț.
Descrierea API
În cadrul aplicației, componenta API (Application Programming Interface) are rolul esențial de a permite comunicarea dintre partea de interfață și partea logică din spate. Prin intermediul acestor puncte de acces, aplicația poate să trimită date către server sau să primească date în timp real, fără a fi necesară reîncărcarea completă a paginii. Astfel, experiența utilizatorului devine mult mai fluidă, iar interacțiunea cu aplicația este una naturală.
API-ul este construit direct în cadrul frameworkului Next.js, folosind sistemul intern de rute dinamice din directorul pages/api. Fiecare fișier aflat în acest director definește un endpoint specific, care poate fi accesat prin metode HTTP precum GET sau POST. În versiunea actuală a aplicației, sunt implementate două endpoint-uri principale care gestionează cele mai importante interacțiuni ale utilizatorului cu aplicația: manipularea datelor despre flori și trimiterea de întrebări către asistentul AI.
Primul endpoint se află la adresa /api/records și este responsabil pentru gestionarea colecției de flori. Prin metoda GET, aplicația poate prelua toate înregistrările salvate în baza de date MongoDB. Aceste date sunt apoi afișate în interfață, sub formă de carduri cu titlu, descriere și eventuale informații suplimentare. Prin metoda POST, utilizatorul poate trimite date noi, de exemplu, atunci când adaugă o floare în grădina sa virtuală sau în wishlist. Datele sunt trimise în format JSON și validate înainte de a fi inserate în colecția MongoDB.
Al doilea endpoint se află la adresa /api/answer și este integrat cu serviciul OpenAI. Rolul său este de a primi întrebări scrise de utilizator și de a returna un răspuns generat automat de un model AI. Acest endpoint folosește exclusiv metoda POST, întrucât fiecare întrebare este considerată o cerere personalizată. După primirea întrebării, aceasta este trimisă către API-ul oficial OpenAI, folosind cheia de acces salvată în fișierul .env.local. Răspunsul este procesat și apoi returnat către aplicație, care îl afișează într-o zonă specială a interfeței.
Ambele endpoint-uri folosesc formatul JSON pentru schimbul de date, ceea ce asigură compatibilitatea și ușurința în prelucrare. De asemenea, acestea sunt implementate cu mecanisme de tratare a erorilor, astfel încât aplicația să nu se blocheze în cazul unor cereri incorecte sau al indisponibilității rețelei. Este important de menționat că, în forma sa actuală, aplicația nu necesită autentificare pentru utilizarea acestor API-uri. Pentru a implementa funcționalitatea de autentificare, am ales platforma Clerk, o soluție modernă și completă, care oferă integrare nativă cu Next.js. Clerk se remarcă prin ușurința cu care poate fi integrată într-o aplicație React sau Next.js, prin oferirea unor componente gata făcute pentru autentificare și gestionarea sesiunilor, precum și prin middleware-ul său care asigură protecția paginilor la nivel de server. De asemenea, Clerk suportă multiple metode de autentificare, inclusiv email și social login, oferind o experiență flexibilă și securizată utilizatorilor.
Flux de date
Fluxul de date într-o aplicație web definește modul în care informația circulă între utilizator, interfață, server și, eventual, servicii externe. În cadrul proiectului, atunci când utilizatorul
accesează aplicația în browser, interfața este încărcată și randată prin frameworkul Next.js. Utilizatorul poate vedea o serie de elemente interactive precum liste de flori, butoane pentru adăugare, formulare de completat sau o secțiune dedicată chatbotului. În momentul în care utilizatorul completează un formular și trimite o floare nouă, de exemplu, aplicația declanșează un request de tip POST către endpoint-ul definit la /api/records. Acest request conține informațiile despre floare sub forma unui obiect JSON, incluzând numele, categoria, detalii despre întreținere și alte caracteristici relevante.
La nivelul backend-ului, această cerere este recepționată de fișierul corespunzător din directorul pages/api, unde datele sunt preluate, validate și apoi trimise către baza de date MongoDB. Dacă inserarea are succes, serverul returnează un răspuns pozitiv, care este apoi afișat în interfață. În cazul în care utilizatorul doar dorește să consulte lista completă a florilor, aplicația trimite o cerere GET către același endpoint, iar serverul răspunde cu un vector de obiecte JSON ce conține toate florile înregistrate anterior.
Un al doilea flux important este cel generat de interacțiunea cu chatbotul. Când utilizatorul introduce o întrebare în interfață, aplicația trimite un request POST către ruta /api/answer. Conținutul întrebării este transmis serverului sub forma unui obiect JSON. Aici, datele sunt preluate și trimise mai departe către serviciul extern OpenAI, printr-un apel API autenticat cu cheia salvată în fișierul .env.local. Modelul de inteligență artificială procesează întrebarea și returnează un răspuns generat, care este transmis înapoi către aplicație și afișat în mod vizibil în interfață. Întregul proces se întâmplă în doar câteva secunde, fără a reîncărca pagina.
Aceste fluxuri de date sunt susținute de metode HTTP standard, printre care GET pentru citire și POST pentru trimiterea de date noi. Datele circulă în format JSON, ceea ce permite o compatibilitate largă între componente și o prelucrare rapidă. În ceea ce privește securitatea, datele sensibile, precum cheia API și stringul de conectare la baza de date, nu sunt hardcodate în aplicație, ci sunt salvate în fișiere de mediu separate, care nu sunt publicate online. Acest fapt contribuie la menținerea unui standard minim de securitate.
Pe partea de infrastructură, aplicația rulează într-un container Docker, unde aceste fluxuri sunt replicate identic. Containerul pornește aplicația pe portul 3000 și este expus în afară prin NGINX sau direct, în funcție de configurare. Acest mod de organizare permite rularea aplicației în mod consistent, indiferent de mediul în care este deployată local, pe un server sau într-un mediu cloud precum AWS EC2.
Odată autentificat, utilizatorul primește un token de sesiune care este păstrat în cookie-uri securizate. Acest token este utilizat în toate cererile ulterioare pentru a confirma identitatea utilizatorului și a permite accesul la pagini și funcționalități autorizate. Componentele front-end folosesc hook-ul oferit de Clerk pentru a accesa starea curentă a autentificării, afișând conținut personalizat sau componente de interfață specifice, precum butonul de logout sau formularul de adăugare flori.
Capturi de ecran
Figura 1: Compilarea proiectului in mediul local
Figura 2: Rezultatul compilarii pe localhost
Figura 3:Deployments in platforma Vercel
Figura 4: Rezultatul compilarii in Platforma Vercel
Figura 5: Pornire instanta AWS
Figura 6: Alocare Elastic IP
Referințe
Pentru realizarea aplicației au fost consultate surse oficiale de documentație, care au stat la baza procesului de dezvoltare și au oferit explicații utile atât pentru etapele de programare, cât și pentru cele de configurare și publicare în medii cloud.
Proiectul este încărcat pe contul de GitHub:
https://github.com/ValentinaBozianu/SIMPRE_2025.git
Aplicatia este conectata la Vercel prin contul:
https://vercel.com/valentina-bozianus-projects/~/deployments
https://simpre-2025-six.vercel.app/
Proiectul este sincronizat pe AWS cu următoarea adresa de Elastic IP:
http://13.48.14.65/
Pentru gestionarea datelor, s-a folosit baza de date MongoDB, accesată prin driverul nativ pentru Node.js.
https://nextjs.org/docs
https://www.mongodb.com/docs/drivers/node/current/
Integrarea cu serviciul OpenAI a presupus apelarea unui API extern, care necesită autentificare printr-o cheie secretă.
https://platform.openai.com/docs/api-reference
Pentru partea de interfață și stilizare, s-a folosit Tailwind CSS, un framework CSS de tip utility-first.
https://tailwindcss.com/docs
Pentru autentificare, am integrat platforma Clerk:
https://clerk.com/docs/nextjs
În ceea ce privește containerizarea, s-a utilizat Docker pentru crearea unui fișier Dockerfile structurat pe etape, optimizând astfel dimensiunea imaginii și viteza de lansare. Pentru rularea aplicației în cloud, a fost folosit serviciul AWS EC2 pentru configurarea serverului, alocarea IP-ului elastic, deschiderea porturilor și conectarea prin SSH.
https://hub.docker.com/_/node
https://docs.aws.amazon.com/ec2/
Prezentarea aplicatiei:
https://youtu.be/YuOrhSROzB0?si=fAjkyO6PCeWJT-9L