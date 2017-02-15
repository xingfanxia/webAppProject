var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};

var config = {
    type: 'radar',
    data: {
        labels: ["Accel", "Agility", "React", 
    "Balance"," Stamina", "Strength", 
    "Intercept", "Position", "Vision"],
        datasets: [{
        	scaleOverride: true,
            label: "Player Stats",
            scaleStartValue: 0,
            pointLabelFontSize: 16,
            borderColor: "rgba(0,120,0,1)",
            backgroundColor: "rgba(0,120,0,0.2)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBackgroundColor: "#fff",
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
        }]
    },
    options: {
        title:{
            display:true,
            text:"PlayerStats"
        },
        elements: {
            line: {
                tension: 0.0,
            }
        },
        scale: {
            beginAtZero: true,
            reverse: false
        }
    }
};

var step = 10;
var max = 100;
var config_compare = {
    type: 'radar',
    data: {
        labels: ["Accel", "Agility", "React", 
    "Balance"," Stamina", "Strength", 
    "Intercept", "Position", "Vision"],
        datasets: [{
        	scaleOverride: true,
            label: "Player1 Stats",
            scaleStartValue: 0,
            pointLabelFontSize: 16,
            borderColor: "rgba(0,120,0,1)",
            backgroundColor: "rgba(0,120,0,0.2)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBackgroundColor: "#fff",
            scaleSteps: step,
            scaleStepWidth: Math.ceil(max / step),
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
        }, {
        	scaleOverride: true,
            label: "Player2 Stats",
            scaleStartValue: 0,
            pointLabelFontSize: 16,
            borderColor: "rgba(120,0,0,1)",
            backgroundColor: "rgba(120,0,0,0.2)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBackgroundColor: "#fff",
            scaleSteps: step,
            scaleStepWidth: Math.ceil(max / step),
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
        }]
    },
    options: {
        title:{
            display:true,
            text:"PlayerStats"
        },
        elements: {
            line: {
                tension: 0.0,
            }
        },
        scale: {
            beginAtZero: true,
            reverse: false
        }
    }
};

var barchartData = {
    labels: ["Player1", "Player2", "Player3", "Player4", "Player5", "Player6", "Player7"],
    datasets: [{
        type: 'bar',
        label: 'Similarity of the player to player of interest',
        backgroundColor: "rgba(151,187,205,0.5)",
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
        borderColor: 'white',
        borderWidth: 2
    }]

};

function drawBarChart() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBarChart = new Chart(ctx, {
        type: 'bar',
        data: barchartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Similiarity Bar Chart'
            }
        }
    });
};

window.onload = function() {
    window.myRadar = new Chart(document.getElementById("canvas"), config_compare);
};

function updateGraph(listATTR, player1) {
	config_compare.data.datasets[0].data = listATTR;
    config_compare.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
     config_compare.data.datasets[0].label= player1;
    config_compare.data.datasets[1].label= "Player2 Stats";
	window.myRadar.update();
}

function updateGraphCompare(attr1, attr2, player1, player2) {
	config_compare.data.datasets[0].data = attr1;
	config_compare.data.datasets[1].data = attr2;
    config_compare.data.datasets[0].label= player1;
    config_compare.data.datasets[1].label= player2;
	// window.myRadar = new Chart(document.getElementById("canvas"), config_compare);
	window.myRadar.update();
}

function updateBarChart(names, listATTR) {
    barchartData.labels = names;
    barchartData.datasets[0].data = listATTR;
    drawBarChart();
    // window.myBarChart.update();
}

$( function() {
	var availableTags = ['Cristiano Ronaldo', 'L. Messi', 'Neymar', 'L. Suàrez', 'M. Neuer', 'De Gea', 'R. Lewandowski', 'J. Boateng', 'G. Bale', 'Z Ibrahimovi?', 'T. Courtois', 'L. Modric', 'M. Ézil', 'Thiago Silva', 'Sergio Ramos', 'S. AgÙero', 'P. Pogba', 'A. Griezmann', 'K. De Bruyne', 'M. Reus', 'E. Hazard', 'T. Kroos', 'D. GodÕn', 'H. Lloris', 'G. HiguaÕn', 'G. Chiellini', 'P. Lahm', 'Pepe', 'P. Cech', 'G. Buffon', 'Iniesta', 'J. Oblak', 'J. RodrÕguez', 'D. Alaba', 'T. MÙller', 'Sergio Busquets', 'A. Sànchez', 'L. Bonucci', 'A. Di MarÕa', 'A. Vidal', 'M. Hummels', 'I. Rakitic', 'David Silva', 'K. Benzema', 'S. Handanovic', 'A. Robben', 'B. Leno', 'Jordi Alba', 'P. Aubameyang', 'D. Payet', 'Marcelo', 'C. Marchisio', 'B. Matuidi', 'Miranda', 'Cesc Föbregas', 'F. Rib_ry', 'Piqu_', 'Santi Cazorla', 'V. Kompany', 'A. Barzagli', 'P. Dybala', 'R. Mahrez', 'M. Verratti', 'A. Lacazette', 'K. Navas', 'H. Mkhitaryan', 'N. Otamendi', 'J. Pastore', 'Coutinho', 'I. GÙndogan', 'N. Gaitàn', 'T. Alderweireld', 'Willian', 'M. Pjanic', 'Diego Costa', 'E. Cavani', 'C. Bravo', 'M. Ham_ik', 'S. Ruffier', 'L. Koscielny', 'Filipe LuÕs', 'S. Mandanda', 'Dani Alves', 'J. Mascherano', 'A. Laporte', 'Andr_ Gomes', 'C. Bacca', 'William Carvalho', 'J. Draxler', 'H. Kane', 'R. Varane', 'G. Xhaka', 'Isco', 'G. Krychowiak', 'Koke', 'K. Manolas', 'R. Lukaku', 'M. G_tze', 'N. Matic', 'Alex Sandro', 'Douglas Costa', 'C. Eriksen', 'C. Smalling', 'Thiago', 'A. Ramsey', 'O. Toprak', 'Azpilicueta', 'David Luiz', 'B. H_wedes', 'R. F_hrmann', 'E. Banega', 'R. Nainggolan', 'Juan Mata', 'Rui PatrÕcio', 'Y. Sommer', 'Javi Martinez', 'Jonas', 'Sokratis', 'Naldo', 'D. Sturridge', 'E. Garay', 'H. Ben Arfa', 'J. Hart', 'A. Turan', 'Aduriz', 'W. Rooney', 'Xabi Alonso', 'Jos_ Reina', 'Y. Tour_', 'J. Terry', 'I. Slimani', 'J. Gim_nez', 'JoÜo Màrio', 'Carvajal', 'K. Bellarabi', 'Y. Konoplyanka', 'Nolito', 'A. Lopes', 'L. Insigne', 'M. Perin', 'S. Aurier', 'G. Medel', 'R. RodrÕguez', 'D. Suba_ic', 'M. ter Stegen', 'S. Mustafi', 'K. Glik', 'Pedro', 'S. Kagawa', 'K. Trapp', 'Oscar', 'M. Musacchio', 'Luiz Gustavo', 'S. Giovinco', 'Y. Brahimi', 'Bruno', 'F. Muslera', 'M. Mand_ukic', 'I. Peri_ic', 'S. Khedira', 'O. Giroud', 'J. Hernàndez', 'M. Benatia', 'L. Bender', 'K. Gameiro', 'D. Mertens', 'J. Vertonghen', 'A. Begovic', 'Jos_ Fonte', 'Diego Alves', 'G. Cahill', 'A. Williams', 'L. Diarra', 'L. Baines', 'A. Consigli', 'JoÜo Moutinho', 'Borja Valero', 'Juanfran', 'C. T_vez', 'G. RodrÕguez', 'V. Enyeama', 'W. Sneijder', 'Nani', 'B. Schweinsteiger', 'J. Toulalan', 'S. Lichtsteiner', 'P. Mertesacker', 'D. De Rossi', 'JÏlio C_sar', 'Danny', 'Quaresma', 'E. Bailly', 'M. Sportiello', 'G. Rulli', 'A. Martial', 'D. Berardi', 'J. Vardy', 'Y. Carrasco', 'Marquinhos', 'F. Vàzquez', 'S. Umtiti', 'S. Savic', 'L. Karius', 'A. Florenzi', 'J. Butland', 'R. Sterling', 'Roberto Firmino', 'M. Icardi', 'Morata', 'K. Koulibaly', 'Lucas', 'Danilo Pereira', 'T. Horn', 'Casemiro', 'Vitolo', 'S. de Vrij', 'J. Matip', 'D. Lovren', 'X. Shaqiri', 'J. Cuadrado', 'Ander Herrera', 'Iborra', 'Parejo', 'J. Wilshere', 'G. Bonaventura', "S. N'Zonzi", 'Adrien Silva', 'G. Sigur_sson', 'M. Arnautovic', 'O. Karnezis', 'M. Sakho', 'A. Rami', 'V. Corluka', 'S. Coleman', 'S. Kj_r', 'BeÐat', 'S. Bender', 'A. Witsel', 'M. Schneiderlin', 'Bojan', 'L. Piszczek', 'A. Guardado', 'Jardel', 'S. Sirigu', 'E. Viviano', 'G. Castro', 'M. _krtel', 'S. Nasri', 'B. Sagna', 'M. Demb_l_', 'M. Krohn-Dehli', 'L. Perrin', 'L. Biglia', 'B. Costil', 'RaÏl Albiol', 'A. Gignac', 'M. GÑmez', 'Gabi', 'Raffael', 'P. Zabaleta', 'F. Marchetti', 'Kakà', 'David Villa', 'Victor Vald_s', 'P. Jagielka', 'P. Evra', 'T. Motta', 'A. Pirlo', 'Casillas', 'Marco Asensio', 'Bernardo Silva', 'N. Fekir', 'N. Kant_', 'N. Maksimovic', 'K. Coman', 'N. SÙle', 'Bruno Peres', 'M. Salah', 'Q. Promes', 'Lucas Vàzquez', 'O. Shatov', 'L. Shaw', 'Jorginho', 'M. Batshuayi', 'IÐigo MartÕnez', 'Deulofeu', 'L. Kurzawa', 'K. Volland', 'Paco Alcàcer', 'J. Cillessen', 'Allan', 'F. Acerbi', 'Andr_ Andr_', 'Lucas P_rez', 'R. Barkley', 'C. Bakambu', 'M. Gabbiadini', 'Marc Bartra', 'P. Herrmann', 'Pizzi', 'O. Ézyakup', 'VÕctor RuÕz', 'A. SchÙrrle', 'M. Gonalons', 'A. Areola', 'R. Pereyra', 'Iago Aspas', 'F. Orellana', 'D. Blind', 'S. El Shaarawy', 'N. Clyne', 'De Marcos', 'W. Bony', 'K. Strootman', 'Iturraspe', 'F. Coquelin', 'Daniel Carri\x8do', 'R. BÙrki', 'N. Nkoulou', 'Taison', 'K. Walker', 'J. McCarthy', 'Camacho', 'Paulinho', 'A. Dzagoev', 'Ganso', 'I. Smolnikov', 'L. Stindl', 'O. Kivrak', 'K. Honda', 'R. Zieler', 'Mikel San Jos_', 'Jos_ CallejÑn', 'C. Benteke', 'J. Henderson', 'M. Parolo', 'K. Mitroglou', 'S. Jovetic', "M. Yanga-M'Biwa", 'G. Wijnaldum', 'A. Lallana', 'L. R_my', 'Sergio Asenjo', 'M. LayÏn', 'B. Tr_moulinas', 'Nacho Monreal', 'Vieirinha', 'B. RuÕz', 'A. Fernàndez', 'A. Candreva', 'D. Astori', 'K. Mirallas', 'RaÏl GarcÕa', 'E. Lamela', 'R. Shawcross', 'C. Vela', 'Y. Cabaye', 'Falcao', 'T. Walcott', 'K. Schmeichel', 'S. Kalou', 'T. Vermaelen', 'R. Eremenko', 'K. Huntelaar', 'Diego LÑpez', 'A. Mirante', 'D. Srna', 'J. Milner', 'Fernandinho', 'R. Adler', 'C. Carrasso', 'Rub_n Castro', 'J. Mathieu', 'Moyà', 'Fernando Torres', 'D. Drogba', 'M. Carrick', 'T. Howard', 'S. Gerrard', "S. Eto'o", 'T. Rosick_', 'R. van Persie', 'Tiago', 'M. Lemos', 'Rafa', 'Williams', 'Alisson', 'M. Meyer', 'Gayö', 'S. Boufal', 'D. Alli', 'Samu Castillejo', 'H. Ziyech', 'F. Kostic', 'SaÏl', 'J. Hector', 'E. Can', 'H. âalhanoglu', 'J. Veltman', 'Sergio Rico', 'Manu Trigueros', 'M. Nastasic', 'Denis Suàrez', 'K. Zouma', 'D. Klaassen', 'A. Carrillo', 'S. Zaza', 'M. Depay', 'Jes_', 'P. Ntep', 'Rafinha', 'J. Murillo', 'R. Saponara', 'J. Ilicic', 'S. Rode', 'P. Hernàndez', 'W. Ben Yedder', 'Danilo', 'Jonathan Viera', 'J. Guilavogui', 'A. Abdennour', 'Y. Rakitskyi', 'K. Kampl', 'J. Bruma', 'Borja BastÑn', 'Adriàn', 'Neto', 'Hugo Mallo', 'Keko', 'D. Didavi', 'O. Baumann', 'Màrio Fernandes', 'R. Cabella', 'J. Corona', 'Mario Gaspar', 'C. Immobile', 'J. Zoet', 'E. Mangala', 'Etxeita', 'M. Hitz', 'T. Kolodziejczak', 'S. RondÑn', 'M. Schmelzer', 'Marlos', 'C. Noboa', 'K. Asamoah', 'D. Welbeck', 'D. Drinkwater', 'K. Gibbs', 'N. Kalinic', 'Giuliano', 'S. Feghouli', 'M. Darmian', 'L. Pratto', 'I. Traor_', 'D. Perotti', 'C. Yacob', 'A. Ogbonna', 'Roberto', 'M. Kruse', 'M. Sissoko', 'L. Fejsa', 'A. Chedjou', 'M. Pereira', 'A. Modeste', 'Sidnei', 'E. D_eko', 'Rhodolfo', 'Hernanes', 'Alexandre Pato', 'B. Ivanovic', 'Eder', 'Adàn', 'S. Tasci', 'M. DÕaz', 'M. Berg', 'A. Ayew', 'W. Reid', 'Lucas Leiva', 'H. Moreno', 'C. Ansaldi', 'Castàn', 'D. Wass', 'Coke', 'Fàbio CoentrÜo', 'N. Sahin', 'Gervinho', 'J. dos Santos', 'D. Rose', 'A. Valencia', 'D. Basta', 'G. Cabral', 'L. Fabianski', 'G. Pell\x8f', 'B. Foster', 'M. Debuchy', 'Dante', 'A. Granqvist', 'H. Herrera', 'M. Bradley', 'G. Clichy', 'L. Podolski', 'I. Akinfeev', 'Soldado', 'JesÏs Navas', 'Negredo', 'V. Demirel', 'J. Sosa', 'A. GÑmez', 'A. Pyatov', 'G. Ochoa', 'R. Huth', 'M. Vorm', 'D. Baier', 'A. Hutchinson', 'M. Topal', 'S. Inan', 'C. Kameni', 'J. Defoe', 'S. Sorrentino', 'G. Barry', 'F. Totti', 'R. Keane', 'V. Koziello', 'Danilo', 'L. San_', 'J. Weigl', 'M. Dahoud', 'RÏben Semedo', 'J. Seri', 'M. Brozovic', 'A. Halilovic', 'L. LÑpez', 'A. Correa', 'J. Tah', 'S. Kritsyuk', 'J. Brandt', 'A. Hahn', 'D. Rugani', 'E. Hysaj', 'JoÜo Cancelo', 'J. Quintero', 'H. Kiyotake', 'K. Wimmer', 'L. Goretzka', 'Fabinho', 'Fred', '”liver Torres', 'S. Man_', 'A. Samaris', 'L. Vietto', 'M. Kovacic', 'M. Arnold', 'T. Stepanenko', 'D. Cheryshev', 'J. Willems', 'Leo Baptistao', 'E. Vi_ca', 'Bernard', 'C. Sànchez', 'D. Baselli', 'A. Milik', 'Bernat', 'R. Jim_nez', 'Roque Mesa', 'J. Brooks', 'S. Vrsaljko', 'H_ctor BellerÕn', 'JoÜozinho', 'T. Hazard', 'V. van Dijk', 'V. Germain', 'J. Vestergaard', 'Sergi Darder', 'J. Geis', 'Felipe Anderson', 'F. Fernàndez', 'F. Ghoulam', 'Samuel', 'Gabriel', 'V. Darida', 'M. Badelj', 'L. Tonelli', 'D. Sidib_', 'B. Lecomte', 'L. Digne', 'Bruno', 'Sergi Roberto', 'D. Tadic', 'C. Arànguiz', 'M. Ryan', 'A. Oxlade-Chamberlain', 'W. Zaha', 'Tomàs Pina', 'G. Imbula', 'S. Coates', 'D. Caligiuri', 'T. Guti_rrez', 'P. Jones', 'W. Khazri', 'Montoya', 'Gil', 'Y. Belhanda', 'R. Soriano', 'Jaume Costa', 'H. Badstuber', 'Y. Malli', 'L. San_', 'G. T_re', 'E. Salvio', 'O. Alonso', 'Illarramendi', 'T. Jantschke', 'Canales', 'Balenziaga', 'L. de Jong', 'J. Baumgartlinger', 'A. Dragovic', 'M. Lanzini', "A. N'Diaye", 'V. Babacan', 'S. Doumbia', 'R. Boudebouz', 'Elias', 'P. Mamaev', 'A. Dzyuba', 'F. Smolov', "Y. M'Vila", 'J. Montero', 'M. Balotelli', 'W. Szczesny', 'I. Popov', 'A. Kolarov', 'Mariano', 'K. Papadopoulos', 'Fernando', 'N. Amrabat', 'M. Gradel', 'B. Dzsudzsàk', 'Luiz Adriano', 'Mosquera', 'J. Lens', 'Miguel Veloso', 'Kiko Casilla', 'Weligton', 'D. Mbokani', 'M. Valbuena', 'F. Johnson', 'P. Wernbloom', 'D. Ospina', 'I. Piatti', 'S. Kums', 'M. Fernàndez', 'K. Boateng', 'Marcano', 'Z. Junuzovic', 'S. Romero', 'D. Criscito', 'D. Valeri', 'Mario Suàrez', 'S. Defour', 'T. Krul', 'G. dos Santos', 'R. Bertrand', 'J. Evans', 'Renato Augusto', 'K. Vermeer', 'Danilo', 'S. Radu', 'J. Blaszczykowski', 'N. Lombaerts', 'G. Rossi', 'Llorente', 'Agirretxe', 'Javi GarcÕa', 'J. M_nez', 'Trashorras', 'I. Afellay', 'Manuel Fernandes', 'S. Dann', 'C. Dempsey', 'Y. Gourcuff', 'Hilton', 'P. Batalla', 'R. Palacio', 'A. Young', 'C. Jallet', 'V. Berezutskiy', 'I. Denisov', 'A. Samedov', 'Javi Fuego', 'O. Wendt', 'G. G_nÙl', 'E. Spahic', 'R. Klavan', "A. D'Alessandro", 'Bruno Alves', 'W. Morgan', 'Felipe Melo', 'M. Demichelis', 'B. Yilmaz', 'A. Meier', 'K. Tour_', 'D. Benaglio', 'Iraizoz', 'Z. To_ic', 'Maxwell', 'M. Bodmer', 'C. Pizarro', 'Ricardo Carvalho', 'Eliseu', 'D. Boyko', 'Renato Sanches', 'Gelson Martins', 'V. Janssen', 'N. Radoja', 'O. Al Soma', 'A. Sulu', 'Jony', 'Petros', 'V. Nilsson Lindel_f', 'A. Sanabria', 'G. Nkoudou', 'S. CristÑforo', 'C. Tolisso', 'G. Escalante', 'S. Torrico', 'Morales', 'Wendell', 'Y. Lodygin', 'K. Bald_ Diao', 'D. Zapata', 'A. Christensen', 'T. Lemar', 'D. Origi', 'D. Rolàn', 'Gabriel', 'J. Kimmich', 'Diego Llorente', 'F. Bernardeschi', 'L. Markovic', 'M. Sanson', 'Paulo Oliveira', 'A. Romagnoli', 'Ederson', 'Ricardo Pereira', 'Jozabed', 'A. Rabiot', 'A. Baba', 'M. de Roon', 'A. Doucour_', 'Felipe', 'B. Davies', 'LuÕs Hernàndez', 'S. Gentiletti', 'Marcelo', 'J. Campbell', 'Màrio Rui', 'M. Niang', 'C. Kramer', 'K. Fortounis', 'J. Stones', 'Rodrigo Moledo', 'Fernando', 'E. Dier', 'S. San_', 'Recio', 'M. Rojo', 'N. Sansone', 'A. Musa', 'G. RamÕrez', 'A. Mandi', 'C_dric', 'A. MarchesÕn', 'Nacho Fernàndez', 'N. Chadli', 'Cristian Tello', 'H. Son', 'Vicente GÑmez', 'D. Praet', 'B. Martins Indi', 'J. Clasie', 'V. Aboubakar', 'Pablo Sarabia', 'N. Mendy', 'Rodrigo', 'P. Wollscheid', 'M. H_ger', 'P. Djilobodji', 'N. Lodeiro', 'Mexer', 'E. P_rez', 'Suk Hyun Jun', 'C. Austin', 'Willian Jos_', 'A. Townsend', 'H. P_rez', 'M. Destro', 'M. Braithwaite', 'N. Gudelj', 'D. Pr_pper', 'C. Tosun', 'K. Casteels', 'G. Kashia', 'E. Giaccherini', 'R. Hamouma', 'A. Nyom', 'Fontös', 'D. Reyes', 'L. Hràdeck_', 'J. Kucka', 'Sandro', 'T. Arslan', 'XandÜo', 'A. Ljajic', 'Iago Falqu_', 'T. Cleverley', 'Rafael', 'M. Ekici', 'Muniain', 'Susaeta', 'S. Rudy', 'Jonathas', 'Y. Bolasie', 'V. Sen', 'B. Dost', 'V. Wanyama', 'Miguel Lopes', 'T. Heurtaux', 'S. Lulic', 'C. Diabat_', 'L. Holtby', 'Juanfran', 'O. El Kaddouri', 'MaurÕcio', 'C. Zambrano', 'M. Diouf', 'A. Paloschi', 'C. Tr_sch', 'B. Espinosa', 'O. Ighalo', 'B. Moukandjo', 'M. Carcela-Gonzalez', 'G. van der Wiel', 'P. Piatti', 'E. Choupo-Moting', 'S. Langkamp', 'N. Subotic', 'F. Delph', 'H. Saivet', 'R. Bobadilla', 'H. Nordtveit', 'A. Carroll', 'Koo Ja Cheol', 'M. Such_', 'Guilherme', 'D. Damjanovic', 'Ki Sung Yueng', 'C. Kabor_', 'P. Diop', 'E. Capoue', 'P. Baysse', 'C. Zapata', 'A. Matri', 'M. Fellaini', 'N. Guzmàn', 'A. Ramos', 'V. Birsa', 'F. Caicedo', 'S. Mignolet', 'Siqueira', 'L. Antonelli', 'M. Andreolli', 'Javi Varas', 'Zurutuza', 'F. Forster', 'M. Sow', 'C. Tiot_', 'J. Cork', 'L. Cattermole', 'R. Riou', 'Rafinha', 'R. Vlaar', 'S. Bocchetti', 'I. Abate', 'R. Elm', 'V. Denisov', 'R. Shishkin', 'A. Kasaev', 'M. Ruben', 'G. Paletta', 'E. Polanski', 'C. Th_r_au', 'J. Mikel', 'Adriano', 'Charles', 'G. Jourdren', 'A. Raggi', 'O. Kucher', 'V. Ibi_evic', 'JesÏs Gàmez', 'R. Montolivo', 'F. Quagliarella', 'Jurado', 'B. Gomis', 'C. Gentner', 'L. Ciman', 'P. Skjelbred', 'R. Civelli', 'M. Noble', 'A. Lennon', 'P. Verhaegh', 'LuisÜo', 'Z. Karcemarskas', 'Ivàn Cu_llar', 'Xabi Prieto', 'F. Belluschi', 'A. OriÑn', 'M. Barovero', 'L. LÑpez', 'B. Cesar', 'W. Caballero', 'M. LÑpez', 'E. Cambiasso', 'Vàgner Love', 'S. Kie¤ling', 'Gomes', 'Reyes', 'J. Vald_s', 'A. Aquilani', 'N. de Jong', 'L. Butelle', 'C. Samba', 'JoaquÕn', 'C_sar Navas', 'A. Cassano', 'F. Lampard', 'A. Gamberini', 'M. De Sanctis', 'R. Weidenfeller', 'O. Demb_l_', 'Formosandrinho', 'Sidney Pessinho', 'Everticinho', 'Louri Beretta', 'Claudio CoÕntra', 'Maikel Catarino', 'Ronaldo Esler', 'Gazzolisco', 'Raphaelito Anjos', 'Oyarzabal', 'F. Andone', 'Dani Ceballos', 'M. Vecino', "C. N'Doye", 'J. Calleri', 'J. Izquierdo', 'F. Cartabia', 'Y. Tielemans', 'A. Kramaric', 'K. Tete', 'Dani GarcÕa', 'D. Zappacosta', 'F. Monetti', 'Jemerson', 'RÏben Vezo', 'L. Alario', 'V. Cuesta', 'M. Kranevitter', 'E. Mas', 'A. MejÕa', 'F. Armani', 'D. Torres', 'V. Hernàndez', 'F. Pardo', 'Aderllan Santos', 'L. Depoitre', 'M. Lemina', 'L. Vangioni', 'Medràn', 'Alex Telles', 'R. Bazoer', 'Y. Gerhardt', 'Iuri Medeiros', 'M. Benassi', 'Pedro Santos', 'VÕctor RodrÕguez', 'Manquillo', 'Carles Gil', 'C. Mbemba', 'M. Dos Santos', 'L. Zuffi', 'Jonny', 'R. Ghezzal', 'A. Szymanowski', 'J. Hofmann', 'J. CÑrdoba', 'F. Sch_r', 'Grimaldo', 'A. Belotti'];
	$( "#srch-term-player" ).autocomplete({
		source: availableTags
	});
	$( "#srch-term-compare1" ).autocomplete({
		source: availableTags
	});
	$( "#srch-term-compare2" ).autocomplete({
		source: availableTags
	});
	$( "#srch-term-similar" ).autocomplete({
		source: availableTags
	});
} );

function onGetPlayerStats() {
	event.preventDefault();
	var srchTerm = document.getElementById('srch-term-player').value;
    var url = '/playerStats/'+srchTerm;
    xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('get', url);
    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            playerStatsCallback(JSON.parse(xmlHttpRequest.response));
        }
    }
    
    xmlHttpRequest.send(null)
}

function playerStatsCallback(jsonResponse) {
	var attributes = ["Surname", "Name", "Age", "Accel", "Agility", "React", 
		"Balance"," Stamina", "Strength", 
		"Intercept", "Position", "Vision"]
    var statsList = jsonResponse['results'];
    var playerName = statsList[1];
    if (statsList == -1) {
    	alert("Please Enter the right full name of the player!")
    } else {
	    var stringdisplay = "";
	    stringdisplay += "<ul>"
	    for (var i = 0; i < statsList.length; i++) {
	    	stringdisplay += "<li>" + attributes[i] + ": " + statsList[i] + "</li>";
	    }
	    stringdisplay += "</ul>"
	    var statsDiv = document.getElementById('displayResult');
	    statsDiv.innerHTML = stringdisplay;
	    var passList = statsList.slice(3);
	    updateGraph(passList, playerName);    	
    }
}

function onSimilarPlayers() {
	event.preventDefault();
	var srchTerm = document.getElementById('srch-term-similar').value;
    var url = '/similarPlayers/'+srchTerm;
    xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('get', url);
    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            similarPlayersCallback(JSON.parse(xmlHttpRequest.response));
        }
    }
    xmlHttpRequest.send(null)
}

//Needs to handle invalid input
function similarPlayersCallback(jsonResponse) {
    var similarPLs = jsonResponse['results'];
    var angles = jsonResponse['angleList'];
    if (similarPLs == -1) {
    	alert("Please Enter the right full name of the player!")
    } else {
	    var stringdisplay = "";
	    stringdisplay += "<h3>Similar Players are: </h3> <br>"
	    stringdisplay += "<ul>"
	    for (var i = 0; i < similarPLs.length; i++) {
	    	stringdisplay += "<li>" + similarPLs[i] + "</li>";
	    }
	    stringdisplay += "</ul>"
	    var statsDiv = document.getElementById('displayResult');
	    statsDiv.innerHTML = stringdisplay;
        updateBarChart(similarPLs, angles);
    }
}

function onComparePlayers() {
    event.preventDefault();
    var compare1 = document.getElementById('srch-term-compare1').value;
    var compare2 = document.getElementById('srch-term-compare2').value;    
    var url = '/Search/Compare/'+ compare1 + "+" + compare2;
    xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('get', url);
    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            compareCallback(JSON.parse(xmlHttpRequest.response));
        }
    }
    xmlHttpRequest.send(null)
}

//Needs to handle invalid input
function compareCallback(jsonResponse) {
    var attributes = ["Accel", "Agility", "React", 
        "Balance"," Stamina", "Strength", 
        "Intercept", "Position", "Vision"]
    // var playerStat2 = jsonResponse['playerStat2'];
    // var playerStat1 = jsonResponse['playerStat1'];
    var player1Name = jsonResponse['player1'][1];
    var player2Name = jsonResponse['player2'][1];
    var player1stats = jsonResponse['player1'].slice(3);
    var player2stats = jsonResponse['player2'].slice(3);
    var difference = jsonResponse['results'];
    if(difference == -1){
        alert("Please enter the right full name!");
    } else {
        var stringdisplay = "";
        stringdisplay += "<ul>"
        for (var i = 0; i < difference.length; i++) {
            stringdisplay += "<li>" + attributes[i] + ": " + difference[i] + "</li>";
        }
        stringdisplay += "</ul>"
        var statsDiv = document.getElementById('displayResult');
        statsDiv.innerHTML = stringdisplay;
        updateGraphCompare(player1stats, player2stats, player1Name, player2Name);
    }
}
