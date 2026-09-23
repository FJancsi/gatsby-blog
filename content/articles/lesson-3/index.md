---
title: Elágazások  Feltételek, relációs és logikai operátorok, if, else
date: 2026-09-24
subject: ["feltétel", "logikai érték", "igaz", "hamis", "relációs operátor", "logikai operátor", "elágazás", "szelekció", "feltételes utasítás", "if", "else", "else if"]
author: Fekete János
---

# 1. A program végrehajtásának sorrendje
Az eddig elkészített programjaink utasításai egymás után, a forráskódban megadott sorrendben hajtódtak végre.

```c
printf("Első utasítás\n");
printf("Második utasítás\n");
printf("Harmadik utasítás\n");
```
Ezt `szekvenciális vezérlésnek` nevezzük.

A valós feladatokban azonban gyakran valamilyen feltételtől függ, hogy a programnak mit kell tennie.

Könyvtári példák:
- Ha van elérhető példány, akkor a könyv kikölcsönözhető.

- Ha az olvasónak tartozása van, akkor figyelmeztetést kell megjeleníteni.

- Ha a dokumentum csak helyben használható, akkor nem kölcsönözhető ki.

- Ha a beszerzés teljes költsége belefér a keretbe, akkor a rendelés jóváhagyható.

- Ha egy könyv több mint 30 napja késik, akkor kiemelt figyelmeztetés szükséges.

A programnak tehát bizonyos esetekben választania kell több lehetséges folytatás közül.

# 2. Az elágazás fogalma
Az `elágazás`, más néven `szelekció`, olyan vezérlési szerkezet, amely egy feltétel eredményétől függően meghatározza, hogy a program mely utasításokat hajtsa végre.

Hétköznapi megfogalmazásban:

> Ha egy feltétel teljesül, tegyünk valamit. Ellenkező esetben tegyünk valami mást.

```
HA van elérhető példány,
    AKKOR a könyv kölcsönözhető,
KÜLÖNBEN a könyv jelenleg nem kölcsönözhető.
```
A C-programban ezt az if és else kulcsszavakkal írhatjuk le.

# 3. Feltételek a C nyelvben
A feltétel egy olyan kifejezés, amelynek eredménye igaz vagy hamis.


Például:
```c
elerheto_peldanyok > 0
//HA
int elerheto_peldanyok = 3; -> true

//HA
int elerheto_peldanyok = 0; -> false
```
Ez a feltétel azt vizsgálja, hogy az elérhető példányok száma nagyobb-e nullánál.

### Igaz és hamis a C nyelvben
A C nyelv a számértékek alapján értelmezi a feltételeket:
- a 0 érték hamis;
- minden nullától különböző érték igaz.
```c
if (1)
{
    printf("Ez az utasítás végrehajtódik.\n");
}
```
A feltétel igaz, ezért a kiírás megtörténik.

A gyakorlatban általában nem közvetlenül 0 vagy 1 szerepel a feltételben, hanem összehasonlításokat használunk.

# 4. Relációs operátorok
A `relációs operátorok` két értéket hasonlítanak össze. Az összehasonlítás eredménye igaz vagy hamis.

| Operátor | Jelentés | Példa |
|:---:|---|---|
| `==` | egyenlő | `napok == 0` |
| `!=` | nem egyenlő | `polc != 'A'` |
| `&lt;` | kisebb | `ar &lt; 5000` |
| `&gt;` | nagyobb | `keses &gt; 30` |
| `&lt;=` | kisebb vagy egyenlő | `eletkor &lt;= 18` |
| `&gt;=` | nagyobb vagy egyenlő | `peldanyok &gt;= 1` |

### Egyenlőség vizsgálata
```c
int kesedelmes_napok = 0;

if (kesedelmes_napok == 0)
{
    printf("Nincs késés.\n");
}
```
Az egyenlőség vizsgálatához két egyenlőségjelet használunk:

### Nem egyenlő
```c
char polc = 'B';

if (polc != 'A')
{
    printf("A könyv nem az A polcon található.\n");
}
```
A != operátor akkor ad igaz eredményt, ha a két érték különbözik.

### Kisebb és nagyobb
```c
double ar = 4200.0;

if (ar < 5000.0)
{
    printf("A könyv ára 5000 Ft alatt van.\n");
}
```

```c
int kesedelmes_napok = 35;

if (kesedelmes_napok > 30)
{
    printf("Jelentős késés történt.\n");
}
```

### Kisebb vagy egyenlő, nagyobb vagy egyenlő
```c
int elerheto_peldanyok = 1;

if (elerheto_peldanyok >= 1)
{
    printf("Legalább egy példány elérhető.\n");
}
```
```c
double teljes_koltseg = 50000.0;
double keret = 50000.0;

if (teljes_koltseg <= keret)
{
    printf("A beszerzés belefér a keretbe.\n");
}
```
Az egyenlőség ebben az esetben is elfogadható: ha a beszerzés pontosan felhasználja a teljes keretet, akkor még nem lépi túl azt.

# 5. Az egyszerű if utasítás
Az if segítségével egy vagy több utasítást csak akkor hajtunk végre, ha a megadott feltétel igaz.

### Általános alak
```c
if (feltetel)
{
    utasitasok;
}
```
Példa:
```c
int kesedelmes_napok = 5;

if (kesedelmes_napok > 0)
{
    printf("A dokumentum visszahozása késedelmes.\n");
}
```
A program működése:
- kiértékeli a kesedelmes_napok > 0 feltételt;
- ha a feltétel igaz, végrehajtja a kapcsos zárójelek közötti utasítást;
- ha a feltétel hamis, átugorja az utasításblokkot;
- a program az if utáni résszel folytatódik.

### Utasításblokk
A kapcsos zárójelek közötti programrészt `utasításblokknak` nevezzük.

```c
if (kesedelmes_napok > 0)
{
    printf("A dokumentum késik.\n");
    printf("Késedelmes napok: %d\n", kesedelmes_napok);
}
```
Ha a feltétel igaz, a blokk minden utasítása végrehajtódik.

Ha csak egy utasítás tartozik az if szerkezethez, a kapcsos zárójelek nyelvileg elhagyhatók:

```c
if (kesedelmes_napok > 0)
    printf("A dokumentum késik.\n");
```

A kurzuson azonban mindig használjunk kapcsos zárójeleket!

Ez olvashatóbbá teszi a programot, és csökkenti a későbbi módosításokból eredő hibák veszélyét.

# 6. Az if–else szerkezet
Gyakran nemcsak azt szeretnénk meghatározni, hogy mi történjen igaz feltétel esetén, hanem a hamis esetet is kezelni szeretnénk.

```c
if (feltetel)
{
    utasitasok_igaz_esetben;
}
else
{
    utasitasok_hamis_esetben;
}
```
Példa:
```c
int elerheto_peldanyok = 2;

if (elerheto_peldanyok > 0)
{
    printf("A könyv kölcsönözhető.\n");
}
else
{
    printf("A könyv jelenleg nem kölcsönözhető.\n");
}
```
A két ág közül pontosan az egyik hajtódik végre:
- ha a feltétel igaz, az if ága;
- ha a feltétel hamis, az else ága.

# 7. Több lehetőség kezelése: else if
Ha kettőnél több esetet szeretnénk megkülönböztetni, használhatunk else if ágakat.

### Általános alak
```c
if (elso_feltetel)
{
    elso_eset;
}
else if (masodik_feltetel)
{
    masodik_eset;
}
else
{
    minden_mas_eset;
}
```
A feltételeket a program felülről lefelé vizsgálja. Az első igaz feltételhez tartozó ág végrehajtódik, a többit pedig átugorja.

Példa: késés minősítése
```c
int kesedelmes_napok = 12;

if (kesedelmes_napok == 0)
{
    printf("A dokumentumot időben visszahozták.\n");
}
else if (kesedelmes_napok <= 7)
{
    printf("Rövid késés.\n");
}
else if (kesedelmes_napok <= 30)
{
    printf("Jelentős késés.\n");
}
else
{
    printf("Kiemelten hosszú késés.\n");
}
```
### Miért fontos a feltételek sorrendje?
Vizsgáljuk meg a következő hibás sorrendet:
```c
if (kesedelmes_napok <= 30)
{
    printf("Legfeljebb 30 napos késés.\n");
}
else if (kesedelmes_napok <= 7)
{
    printf("Legfeljebb 7 napos késés.\n");
}
```

# 8. Logikai operátorok
A `logikai operátorok` segítségével több feltételt kapcsolhatunk össze, illetve egy feltétel eredményét megfordíthatjuk.

| Operátor | Elnevezés | Jelentés |
|:---:|---|---|
| `&&` | logikai ÉS | mindkét feltételnek igaznak kell lennie |
| `\|\|` | logikai VAGY | legalább az egyik feltételnek igaznak kell lennie |
| `!` | logikai NEM | megfordítja a feltétel eredményét |

> A || operátor két függőleges vonalból áll, nem két kis l betűből. :)

# 9. A logikai ÉS operátor: &&
Az && operátorral összekapcsolt feltétel csak akkor igaz, ha mindkét részfeltétel igaz.

Például egy könyv akkor kölcsönözhető, ha:
- van elérhető példány;
- és a dokumentum kölcsönözhető típusú.

```c
int elerheto_peldanyok = 2;
char kolcsonozheto = 'i';

if (elerheto_peldanyok > 0 && kolcsonozheto == 'i')
{
    printf("A könyv kikölcsönözhető.\n");
}
else
{
    printf("A könyv nem kölcsönözhető.\n");
}
```
### Az && igazságtáblája
| Első feltétel | Második feltétel | Eredmény |
|:---:|:---:|:---:|
| hamis | hamis | hamis |
| hamis | igaz | hamis |
| igaz | hamis | hamis |
| igaz | igaz | igaz |

### Példa: értéktartomány vizsgálata
Azt szeretnénk ellenőrizni, hogy a támogatás mértéke 0 és 100 közötti érték-e:
```c
double tamogatas = 20.0;

if (tamogatas >= 0.0 && tamogatas <= 100.0)
{
    printf("A támogatás értéke elfogadható.\n");
}
else
{
    printf("Hibás támogatási érték.\n");
}
```
A matematikában ezt így írhatnánk:
```
0 ≤ támogatás ≤ 100
```
C nyelven azonban a két összehasonlítást külön kell megadni, majd && operátorral összekapcsolni.

# 10. A logikai VAGY operátor: ||
A || operátorral összekapcsolt feltétel akkor igaz, ha legalább az egyik részfeltétel igaz.

Például egy dokumentum különleges kezelést igényel, ha:
- muzeális dokumentum;
- vagy csak helyben használható.

```c
char muzealis = 'n';
char helyben_hasznalhato = 'i';

if (muzealis == 'i' || helyben_hasznalhato == 'i')
{
    printf("A dokumentum különleges kezelést igényel.\n");
}
```
### A || igazságtáblája
| Első feltétel | Második feltétel | Eredmény |
|:---:|:---:|:---:|
| hamis | hamis | hamis |
| hamis | igaz | igaz |
| igaz | hamis | igaz |
| igaz | igaz | igaz |

### Példa: több elfogadott válasz
A program kis- és nagybetűs igen választ is elfogad:
```c
char valasz = 'I';

if (valasz == 'i' || valasz == 'I')
{
    printf("Igen választ adott.\n");
}
else
{
    printf("Nem igen választ adott.\n");
}
```
# 11. A logikai NEM operátor: !

A ! operátor megfordítja egy feltétel logikai értékét:
- az igaz értékből hamisat készít;

- a hamis értékből igazat készít.

```c
int van_tartozas = 0;

if (!van_tartozas)
{
    printf("Az olvasónak nincs tartozása.\n");
}
```
Mivel a van_tartozas értéke 0, ezért önmagában hamis. A ! operátor ezt igazzá változtatja.

# 12. Logikai kifejezések zárójelezése
A relációs operátorok kiértékelése megelőzi a logikai ÉS és VAGY operátorok kiértékelését. Ettől függetlenül az összetett feltételeket érdemes zárójelekkel olvashatóbbá tenni.

Zárójelek nélkül:
```c
if (eletkor >= 18 && tartozas == 0)
```

Olvashatóbb formában:
```c
if ((eletkor >= 18) && (tartozas == 0))
```

Bonyolultabb feltételnél a zárójelek a jelentést is meghatározhatják:
```c
if ((elerheto_peldanyok > 0) &&
    (kolcsonozheto == 'i' || kolcsonozheto == 'I'))
{
    printf("A dokumentum kikölcsönözhető.\n");
}
```
Ez akkor igaz, ha:
- van elérhető példány;
- és a felhasználó kis- vagy nagybetűs i karakterrel jelezte a kölcsönözhetőséget.

# 13. Rövidzáras kiértékelés
A C nyelv a logikai kifejezéseket balról jobbra értékeli ki.

Az && esetében, ha az első feltétel hamis, a második feltételt már nem szükséges megvizsgálni, mert a teljes kifejezés mindenképpen hamis.


Az || esetében, ha az első feltétel igaz, a második feltételt már nem szükséges megvizsgálni, mert a teljes kifejezés mindenképpen igaz.

Ezt rövidzáras kiértékelésnek nevezzük.

Különösen fontos lehet például nullával történő osztás megelőzésére:

```c
if (konyvek_szama > 0 &&
    teljes_koltseg / konyvek_szama < 5000.0)
{
    printf("Az átlagos költség 5000 Ft alatt van.\n");
}
```
Ha a konyvek_szama értéke 0, az első feltétel hamis. Emiatt a második feltételben szereplő osztást a program nem hajtja végre.

# 14. Egymásba ágyazott elágazások
Egy if vagy else ágban újabb elágazást is elhelyezhetünk. Ezt egymásba ágyazott elágazásnak nevezzük.


Példa:
```c
int elerheto_peldanyok = 2;
int van_tartozas = 0;

if (elerheto_peldanyok > 0)
{
    if (van_tartozas == 0)
    {
        printf("A könyv kikölcsönözhető.\n");
    }
    else
    {
        printf("A tartozás miatt a kölcsönzés nem engedélyezett.\n");
    }
}
else
{
    printf("Nincs elérhető példány.\n");
}
```
A program először azt vizsgálja, hogy van-e elérhető példány. Csak ezután ellenőrzi az olvasó tartozását.

Ugyanez a döntés összetett feltétellel is megfogalmazható:
```c
if (elerheto_peldanyok > 0 && van_tartozas == 0)
{
    printf("A könyv kikölcsönözhető.\n");
}
else
{
    printf("A könyv nem kölcsönözhető.\n");
}
```
A két változat azonban nem teljesen azonos részletességű: az egymásba ágyazott változat külön üzenettel meg tudja mondani, miért nem engedélyezett a kölcsönzés.

> Egymásba ágyazott elágazást akkor érdemes használni, ha egy második döntésnek csak az első döntés valamelyik eredménye esetén van értelme.

# 15. Változók hatóköre az elágazásban
Az utasításblokkon belül létrehozott változó csak az adott blokkban használható.

```c
if (kesedelmes_napok > 0)
{
    double kesedelmi_dij = kesedelmes_napok * 100.0;

    printf("Késedelmi díj: %.2f Ft\n", kesedelmi_dij);
}
```
A kesedelmi_dij változó az if blokkon kívül már nem érhető el.
Ha a változót az elágazás után is használni szeretnénk, akkor az if előtt kell deklarálni.

# 16. Fontos szabályok és gyakori tévedések
### Értékadás és összehasonlítás
```c
//Értékadás
napok = 10;
//Összehasonlítás
napok == 10
```

### Az else után nincs feltétel

```c
// Helytelen:
else (napok > 10)
// Helyes:
else if (napok > 10)
```

### Az if feltétele után nincs pontosvessző
```c
if (elerheto_peldanyok > 0); //helytelen
{
    printf("Van elérhető példány.\n");
}
```
### Matematikai intervallumot két feltétellel írunk le
```c
if (0 <= tamogatas <= 100) // nem létezik ilyen kifejezés
```

### A feltételek sorrendje számít
lsd korábban

# Gyakorlati rész

### 1. feladat – Elérhető példány vizsgálata
Készítsen programot, amely bekéri egy könyv elérhető példányainak számát!

A program írja ki:

A könyv kölcsönözhető., ha legalább egy példány elérhető;

A könyv jelenleg nem kölcsönözhető., ha nincs elérhető példány.

Példa
```
Elérhető példányok száma: 3
A könyv kölcsönözhető.
```

Megoldás:
```c
#include <stdio.h>

int main(void)
{
    int elerheto_peldanyok = 0;

    printf("Elérhető példányok száma: ");
    scanf("%d", &elerheto_peldanyok);

    if (elerheto_peldanyok > 0)
    {
        printf("A könyv kölcsönözhető.\n");
    }
    else
    {
        printf("A könyv jelenleg nem kölcsönözhető.\n");
    }

    return 0;
}
```

### 2. feladat – Késés kategorizálása
Készítsen programot, amely bekéri a késedelmes napok számát, majd a következő kategóriák egyikét írja ki:

| Késedelmes napok | Eredmény |
|---:|---|
| negatív szám | Hibás adat |
| `0` | Nincs késés |
| `1–7` | Rövid késés |
| `8–30` | Jelentős késés |
| `31` vagy több | Kiemelten hosszú késés |

Példa:
```
Késedelmes napok száma: 12
Jelentős késés.
```

Lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    int kesedelmes_napok = 0;

    printf("Késedelmes napok száma: ");
    scanf("%d", &kesedelmes_napok);

    if (kesedelmes_napok < 0)
    {
        printf("Hibás adat.\n");
    }
    else if (kesedelmes_napok == 0)
    {
        printf("Nincs késés.\n");
    }
    else if (kesedelmes_napok <= 7)
    {
        printf("Rövid késés.\n");
    }
    else if (kesedelmes_napok <= 30)
    {
        printf("Jelentős késés.\n");
    }
    else
    {
        printf("Kiemelten hosszú késés.\n");
    }

    return 0;
}
```
Az előző feladat kiegészítése:
A késedelem elengedhető abban az esetben ha tagsági viszony 30 napnál öregebb.

# Hibakeresési feladatok
### 1. hiba
A program azt szeretné megvizsgálni, hogy nincs-e késés:
```c
int kesedelmes_napok = 5;

if (kesedelmes_napok = 0)
{
    printf("Nincs késés.\n");
}
else
{
    printf("Van késés.\n");
}
```

<details>
<summary>Megoldás</summary>
A feltételben egyetlen = szerepel, amely értékadást jelent
</details>

### 2. hiba
```c
int elerheto_peldanyok = 0;

if (elerheto_peldanyok > 0);
{
    printf("A könyv kölcsönözhető.\n");
}
```
<details>
<summary>Megoldás</summary>
Az if feltétele után felesleges pontosvessző szerepel.
</details>

### 3. hiba 
A program azt szeretné ellenőrizni, hogy a támogatás 0 és 100 százalék között van-e:
```c
double tamogatas = 120.0;

if (0 <= tamogatas <= 100)
{
    printf("Elfogadható érték.\n");
}
else
{
    printf("Hibás érték.\n");
}
```
<details>
<summary>Megoldás</summary>
A matematikai láncolt összehasonlítás C nyelven nem használható ebben a formában.
</details>

### 4. hiba
```c
int kesedelmes_napok = 4;

if (kesedelmes_napok <= 30)
{
    printf("Jelentős késés.\n");
}
else if (kesedelmes_napok <= 7)
{
    printf("Rövid késés.\n");
}
else
{
    printf("Kiemelten hosszú késés.\n");
}
```
Miért kap a 4 napos késés „Jelentős késés” minősítést?

<details>
<summary>Megoldás</summary>
A program felülről lefelé vizsgálja a feltételeket. A 4 értékre már az első feltétel igaz.
</details>

### 5. hiba
Egy könyv akkor kölcsönözhető, ha van elérhető példány, és az olvasónak nincs tartozása:
```c
if (elerheto_peldanyok > 0 || van_tartozas == 0)
{
    printf("A kölcsönzés engedélyezett.\n");
}
```
<details>
<summary>Megoldás</summary>
A feltételben ||, vagyis logikai VAGY szerepel. Emiatt a kölcsönzés akkor is engedélyezett lehet, ha csak az egyik feltétel teljesül.

A feladat szerint mindkét feltételnek teljesülnie kell, ezért logikai ÉS szükséges.
</details>

### 6. hiba
```c
int kesedelmes_napok = 35;

if (kesedelmes_napok > 0)
{
    printf("Van késés.\n");
}

if (kesedelmes_napok > 7)
{
    printf("Jelentős késés.\n");
}

if (kesedelmes_napok > 30)
{
    printf("Kiemelten hosszú késés.\n");
}
```

<details>
<summary>Megoldás</summary>
A három különálló if feltétel egymástól függetlenül értékelődik ki. A 35 mindhárom feltételt teljesíti, ezért mindhárom kiírás megtörténik.

Ha a kategóriák egymást kizárják, if–else if–else szerkezetet kell használni.
</details>

# Az óra összefoglalása
- Az elágazás lehetővé teszi, hogy a program egy feltételtől függően különböző utasításokat hajtson végre.
- A feltétel eredménye igaz vagy hamis.
- C nyelven a 0 hamis, minden nullától különböző érték igaz.
- A relációs operátorok értékeket hasonlítanak össze.
- Az egyenlőség vizsgálatára ==, értékadásra = használható.
- Az egyszerű if ág csak igaz feltétel esetén hajtódik végre.
- Az if–else szerkezet két lehetőség közül választ.
- Az else if több eset megkülönböztetésére használható.
- Az && akkor igaz, ha minden összekapcsolt feltétel igaz.
- A || akkor igaz, ha legalább egy összekapcsolt feltétel igaz.
- A ! megfordítja a feltétel logikai értékét.
- A feltételek sorrendje befolyásolja a program működését.
- A matematikai intervallumokat C nyelven külön összehasonlításokkal adjuk meg.
- Az egymásba ágyazott elágazás részletesebb döntési folyamatot tesz lehetővé.

# Szorgalmi feladat – Első ZH eredményének értékelése

Készítsen programot, amely bekéri egy hallgató első ZH-n elért pontszámát!

A ZH maximális pontszáma 50 pont.

### Ponthatárok
Az 50 pontos ZH eredményét először százalékra kell átszámítani.

Az érdemjegyet a következő ponthatárok alapján kell meghatározni:

| Százalék | Érdemjegy |
|---:|:---:|
| 0–40 | 1 |
| 41–55 | 2 |
| 56–70 | 3 |
| 71–85 | 4 |
| 86–100 | 5 |

### Követelmények
A program:
1. kérje be az elért pontszámot;
2. ellenőrizze, hogy a pontszám 0 és 50 közé esik-e;
3. hibás pontszám esetén írjon ki hibaüzenetet;
4. számítsa ki a százalékos eredményt;
5. határozza meg az érdemjegyet;
6. írja ki az elért pontot, a százalékot és az érdemjegyet;
7. jelezze külön, ha a ZH sikeres vagy sikertelen.

Példa:
```
Elért pontszám: 36

Eredmény: 36 / 50 pont
Százalék: 72.00%
Érdemjegy: 4
A ZH sikeres.
```
Hibakezelés
```
Elért pontszám: 54
Hibás pontszám. Az eredménynek 0 és 50 közé kell esnie.
```