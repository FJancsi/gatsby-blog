---
title: "Struktúrák"
date: "2026-11-26"
subject: ["struktúra", "struct", "összetett adattípus", "rekord", "mező", "adattag", "adatmodellezés", "inicializálás", "pontoperátor", "struktúrák tömbje", "karaktertömb"]
author: Fekete János
---

# 1. Miért van szükség struktúrákra?
Korábban két párhuzamos tömbben tároltuk a csomagok azonosítóját és tömegét:
```c
int azonositok[3] = {101, 205, 310};
double tomegek[3] = {1.5, 7.2, 12.4};
```
Az azonos indexű elemek ugyanahhoz a csomaghoz tartoztak:
```c
azonositok[1]  /* A második csomag azonosítója. */
tomegek[1]     /* A második csomag tömege. */
```
Ez működik, de az összetartozó adatok külön tömbökben találhatók. A programozónak kell ügyelnie arra, hogy ne keverje össze őket.


A `struktúra` egyetlen egységbe fogja össze az összetartozó adatokat.

```c
struct Csomag
{
    int azonosito;
    double tomeg;
};
```

Egy csomag adatai így már együtt tárolhatók:
```c
struct Csomag csomag = {101, 1.5};
```

### Tömb és struktúra
| Tömb | Struktúra |
|---|---|
| Azonos típusú elemeket tárol | Különböző típusú adatokat is tárolhat |
| Például öt könyv oldalszámát | Például egy könyv oldalszámát, árát és polcjelét |
| Az elemeket indexszel érjük el | A mezőket névvel érjük el |
| `oldalszamok[2]` | `konyv.oldalszam` |

A struktúrát más környezetben rekordnak is nevezik. Az egyes adatait mezőknek vagy adattagoknak hívjuk.

### 2. Összetartozó adatok modellezése

Az `adatmodellezés` során eldöntjük, milyen adatokat kell tárolnunk egy valós vagy elképzelt dologról.

Egy könyv esetén például:
| Adat | Mezőnév | Típus |
|---|---|---|
| Nyilvántartási azonosító | `azonosito` | `int` |
| Oldalszám | `oldalszam` | `int` |
| Ár | `ar` | `double` |
| Polc betűjele | `polc` | `char` |

A megfelelő struktúra:
```c
struct Konyv
{
    int azonosito;
    int oldalszam;
    double ar;
    char polc;
};
```
Nem szükséges minden elképzelhető adatot tárolni. Azokat a mezőket választjuk ki, amelyekre a feladat megoldásához szükség van.

> Egy könyvtári katalógus és egy könyvesbolt eltérő adatokat tarthat fontosnak ugyanarról a könyvről. Az adatmodell mindig a program céljához igazodik.

# 3. Struktúratípus és struktúraváltozó

A struktúra megadásakor leírjuk, milyen mezőkből áll az új típus.
```c
struct Konyv
{
    int azonosito;
    int oldalszam;
    double ar;
    char polc;
};
```

Ez önmagában még nem hoz létre konkrét könyvadatokat tartalmazó változót.

A változó létrehozása:
```c
struct Konyv konyv;
```
- struct Konyv: a változó típusa;
- konyv: a változó neve.

A struktúra definícióját ezen az órán a main függvény előtt helyezzük el.

```c
#include <stdio.h>

/* A típus leírása. A lezáró kapcsos zárójel után pontosvessző kell. */
struct Konyv
{
    int azonosito;
    int oldalszam;
    double ar;
    char polc;
};

int main(void)
{
    /* Két külön változó ugyanabból a típusból. */
    struct Konyv elso = {101, 320, 3499.0, 'A'};
    struct Konyv masodik = {205, 245, 2790.0, 'B'};

    printf("Első könyv azonosítója: %d\n", elso.azonosito);
    printf("Második könyv azonosítója: %d\n", masodik.azonosito);

    return 0;
}
```

### Inicializálás
A kezdőértékeket a mezők deklarációs sorrendjében adjuk meg:
```c
struct Konyv konyv = {101, 320, 3499.0, 'A'};
```
A megfeleltetés:
```
azonosito → 101
oldalszam → 320
ar        → 3499.0
polc      → 'A'
```

A numerikus mezők nullázásához használható:
```c
struct Konyv konyv = {0};
```
Ebben az esetben a polc mező is nulla karakterértéket kap, nem pedig a látható '0' karaktert. Megjelenítés előtt adjunk neki megfelelő értéket:

```c
konyv.polc = '?';
```

# 4. Mezők elérése és módosítása
A struktúra mezőit a pontoperátorral érjük el:

```c
valtozo_neve.mezo_neve
```
Például:
```c
konyv.oldalszam
konyv.ar
```
Egy mező ugyanúgy használható, mint egy egyszerű változó:
- kiírható;
- beolvasható;
- módosítható;
- szerepelhet számításban vagy feltételben.

```c
#include <stdio.h>

struct Konyv
{
    int azonosito;
    int oldalszam;
    double ar;
    char polc;
};

int main(void)
{
    struct Konyv konyv = {101, 320, 3499.0, 'A'};

    /* A mező típusa határozza meg a formátumspecifikátort. */
    printf("Azonosító: %d\n", konyv.azonosito);
    printf("Oldalszám: %d\n", konyv.oldalszam);
    printf("Ár: %.2f Ft\n", konyv.ar);
    printf("Polc: %c\n", konyv.polc);

    /* Egyetlen mező módosítása. */
    konyv.polc = 'B';

    /* Számítás a mező értékével: 10%-os árcsökkentés. */
    konyv.ar = konyv.ar * 0.90;

    /* A mező feltételben is használható. */
    if (konyv.oldalszam >= 300)
    {
        printf("A könyv legalább 300 oldalas.\n");
    }

    printf("Új ár: %.2f Ft\n", konyv.ar);
    printf("Új polc: %c\n", konyv.polc);

    return 0;
}
```
# 5. Adatbevitel struktúrába

Az adatokat közvetlenül a struktúra mezőibe is beolvashatjuk.
```c
struct Konyv konyv = {0};

printf("Azonosító: ");
scanf("%d", &konyv.azonosito);

printf("Oldalszám: ");
scanf("%d", &konyv.oldalszam);

printf("Ár: ");
scanf("%lf", &konyv.ar);

printf("Polc betűjele: ");
scanf(" %c", &konyv.polc);
```
A scanf függvényben a kiválasztott mező elé & jelet írunk:
```c
&konyv.oldalszam
```
Az adatellenőrzés is ugyanúgy működik, mint korábban:
```c
printf("Oldalszám: ");
scanf("%d", &konyv.oldalszam);

while (konyv.oldalszam <= 0)
{
    printf("Az oldalszámnak pozitívnak kell lennie. Adja meg újra: ");
    scanf("%d", &konyv.oldalszam);
}
```
> A struktúra összefogja az adatokat, de önmagában nem ellenőrzi, hogy azok értelmesek-e.

# 6. Szöveg tárolása struktúrában

Egy könyv címe nem egyetlen karakter, ezért char helyett karaktertömbre van szükség.


A C-beli szöveg végén egy különleges lezáró karakter, a '\0' található. Ennek is helyet kell biztosítani.
```c
char cim[6] = "Konyv";
```
Az öt látható karakter mellett a lezáró karakter is elfoglal egy elemet.


Karaktertömb struktúramezőként is használható:
```c
#include <stdio.h>

struct Dokumentum
{
    char cim[50];
    int kiadasi_ev;
    int oldalszam;
};

int main(void)
{
    /* A cím a struktúra inicializálásakor kap értéket. */
    struct Dokumentum dokumentum =
    {
        "Egri csillagok",
        1901,
        560
    };

    /* A teljes szöveg kiírásához %s szükséges. */
    printf("Cím: %s\n", dokumentum.cim);
    printf("Kiadási év: %d\n", dokumentum.kiadasi_ev);
    printf("Oldalszám: %d\n", dokumentum.oldalszam);

    return 0;
}
```
A következő későbbi értékadás viszont nem megengedett:
```c
dokumentum.cim = "Masik cim";  /* Hibás: a karaktertömb nem másolható így. */
```
> Ezen az órán a szöveges mezők kezdőértékét a programkódban adjuk meg. A teljes sorok beolvasását és a szövegek másolását nem szükséges használni a feladatokhoz.

# 7. Struktúrák tömbje
Egy struktúraváltozó egy könyv adatait tárolja. Több könyvhöz struktúrákból álló tömböt használhatunk.
```c
struct Konyv konyvek[3] =
{
    {101, 320, 3499.0, 'A'},
    {205, 245, 2790.0, 'B'},
    {310, 410, 4290.0, 'A'}
};
```
Egy könyv kiválasztása:

```c
konyvek[1]
```

A kiválasztott könyv valamely mezője:
```c
konyvek[1].oldalszam
```

A kifejezés értelmezése:
- konyvek[1]: a második könyv;
- .oldalszam: ennek a könyvnek az oldalszáma.

### Bejárás és módosítás
```c
#include <stdio.h>

struct Konyv
{
    int azonosito;
    int oldalszam;
    double ar;
    char polc;
};

int main(void)
{
    struct Konyv konyvek[3] =
    {
        {101, 320, 3499.0, 'A'},
        {205, 245, 2790.0, 'B'},
        {310, 410, 4290.0, 'A'}
    };

    /* A második könyv polcának módosítása. */
    konyvek[1].polc = 'C';

    /* Az egyes tömbelemek teljes könyvadatokat tartalmaznak. */
    for (int i = 0; i < 3; i++)
    {
        printf("%d. könyv: %d, %d oldal, %.2f Ft, %c polc\n",
               i + 1,
               konyvek[i].azonosito,
               konyvek[i].oldalszam,
               konyvek[i].ar,
               konyvek[i].polc);
    }

    return 0;
}
```
A korábban tanult tömbműveletek mezőkre is alkalmazhatók. Például az oldalszámok összegzése:
```c
int osszes_oldal = 0;

for (int i = 0; i < 3; i++)
{
    osszes_oldal += konyvek[i].oldalszam;
}
```
A ciklus működése nem változott: csak az aktuális tömbelem egyik mezőjét dolgozzuk fel.

# 1. hiba
```c
struct Konyv
{
    int azonosito;
    int oldalszam;
}
```
<details>
<summary>Megoldás</summary>
A struktúratípus leírását pontosvesszővel kell lezárni.
</details>

2. hiba
```c
struct Konyv
{
    int oldalszam;
};

struct Konyv konyv = {320};

printf("%d\n", Konyv.oldalszam);
```
<details>
<summary>Megoldás</summary>
A Konyv a struktúratípus neve, nem a konkrét változóé.
A mezőt a konyv változón keresztül érjük el.
</details>

# 3. hiba
```c
struct Konyv konyv = {0};

scanf("%d", konyv.oldalszam);
scanf("%f", &konyv.ar);
```

<details>
<summary>Megoldás</summary>
Az első beolvasásból hiányzik az &.
A másodiknál a double mezőhöz %lf szükséges.
</details>

# 4. hiba – Hiányzó tömbindex
```c
struct Konyv konyvek[3] = {0};

printf("%d\n", konyvek.oldalszam);
```
<details>
<summary>Megoldás</summary>
A konyvek egy tömb. Először ki kell választani egy könyvet, és csak utána érhető el annak mezője.
</details>

# Órai munka – Egy könyv adatlapja

Készítsen programot, amely egy könyv adatait struktúrában tárolja!

### A struktúra mezői:
| Mező | Típus |
|---|---|
| `azonosito` | `int` |
| `oldalszam` | `int` |
| `ar` | `double` |
| `polc` | `char` |

### Követelmények
A program:
- adja meg a struct Konyv típust;
- hozzon létre egy konyv nevű változót;
- kérje be a könyv négy adatát;
- az azonosító és az oldalszám csak pozitív lehet;
- az ár nem lehet negatív;
- hibás numerikus adat esetén while ciklussal kérje újra az értéket;
- rendezett formában írja ki a könyv adatait.

A polc betűjelét nem szükséges ellenőrizni.

### Példa kimenet:
```
Könyv adatlapja
===============

Azonosító: 101
Oldalszám: 320
Ár: 3499
Polc betűjele: A

A könyv adatai
-------------
Azonosító: 101
Oldalszám: 320
Ár: 3499.00 Ft
Polc: A
```

### Lehetséges megoldás
```c
#include <stdio.h>

struct Konyv
{
    int azonosito;
    int oldalszam;
    double ar;
    char polc;
};

int main(void)
{
    struct Konyv konyv = {0};

    printf("Könyv adatlapja\n");
    printf("===============\n\n");

    printf("Azonosító: ");
    scanf("%d", &konyv.azonosito);

    while (konyv.azonosito <= 0)
    {
        printf("Pozitív azonosítót adjon meg: ");
        scanf("%d", &konyv.azonosito);
    }

    printf("Oldalszám: ");
    scanf("%d", &konyv.oldalszam);

    while (konyv.oldalszam <= 0)
    {
        printf("Pozitív oldalszámot adjon meg: ");
        scanf("%d", &konyv.oldalszam);
    }

    printf("Ár: ");
    scanf("%lf", &konyv.ar);

    while (konyv.ar < 0.0)
    {
        printf("Az ár nem lehet negatív. Adja meg újra: ");
        scanf("%lf", &konyv.ar);
    }

    printf("Polc betűjele: ");
    scanf(" %c", &konyv.polc);

    printf("\nA könyv adatai\n");
    printf("-------------\n");
    printf("Azonosító: %d\n", konyv.azonosito);
    printf("Oldalszám: %d\n", konyv.oldalszam);
    printf("Ár: %.2f Ft\n", konyv.ar);
    printf("Polc: %c\n", konyv.polc);

    return 0;
}
```

# Rövid összefoglalás
- A struktúra különböző típusú, összetartozó adatokat fog össze.
- A struktúra mezői névvel rendelkeznek.
- A típust a struct kulcsszóval adjuk meg.
- A típus leírása és a változó létrehozása két külön lépés.
- A mezőket pontoperátorral érjük el: konyv.ar.
- A mezők beolvashatók, módosíthatók és számításokban használhatók.
- A szöveges adat karaktertömbként lehet struktúramező.
- Több rekordot struktúrákból álló tömbben tárolhatunk.
- Egy ilyen tömb mezőjének elérése: konyvek[i].oldalszam.
- A struktúratípus definíciója után pontosvessző szükséges.

# Szorgalmi feladat – Három dokumentum nyilvántartása
Értéke: +1 pont

Készítsen programot, amely három dokumentum címét, kiadási évét és oldalszámát struktúrák tömbjében tárolja!

### A struktúra
```c
struct Dokumentum
{
    char cim[50];
    int kiadasi_ev;
    int oldalszam;
};
```
A címeket a programban előre adjuk meg:
```c
struct Dokumentum dokumentumok[3] =
{
    {"Egri csillagok", 0, 0},
    {"A Pal utcai fiuk", 0, 0},
    {"Az arany ember", 0, 0}
};
```
### Követelmények
A program:
- hozza létre a struktúratípust és a háromelemű tömböt;
- for ciklussal kérje be minden dokumentum kiadási évét és oldalszámát;
- csak pozitív kiadási évet és oldalszámot fogadjon el;
- hibás adat esetén while ciklussal kérje újra az értéket;
- ciklussal írja ki mindhárom dokumentum címét és adatait;
- számítsa ki a három dokumentum összes oldalszámát;
- kérjen be egy dokumentumsorszámot 1 és 3 között;
- ellenőrizze a sorszámot;
- érvényes sorszám esetén jelenítse meg a kiválasztott dokumentumot;
 -hibás sorszám esetén írjon ki hibaüzenetet.

A címek beolvasása vagy módosítása nem szükséges.

### Példakimenet
```
A dokumentumok adatai
---------------------
1. Egri csillagok – 1901, 560 oldal
2. A Pal utcai fiuk – 1906, 200 oldal
3. Az arany ember – 1872, 480 oldal

Összes oldalszám: 1240

Dokumentum sorszáma (1-3): 2

Cím: A Pal utcai fiuk
Kiadási év: 1906
Oldalszám: 200
```










