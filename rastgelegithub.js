function degistir() {
    let resimElementi = document.getElementById("profil-resmi");
    let rastgeleSayi;
    let url;
    let login;
    let profileLink = document.getElementById("profileLink");

    function getRandomUser() {
        rastgeleSayi = Math.floor(Math.random() * 127548167);
        url = 'https://api.github.com/user/' + rastgeleSayi.toString();

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Kullanıcı bulunamadı');
                }
            })
            .then(data => {
                login = data.login;
                let resimURL = "https://avatars.githubusercontent.com/u/" + data.id;
                resimElementi.src = resimURL;
                profileLink.href = `https://github.com/${login}`;
            })
            .catch(error => {
                console.log(error);
                getRandomUser();
            });
    }
    getRandomUser();
}
