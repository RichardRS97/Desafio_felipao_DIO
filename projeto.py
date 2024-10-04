# Receber a entrada com o nome do Herói e seu nível
nomeHeroi = input("Digite o nome do seu Herói: ")
xpHeroi = int(input("Digite o nível do seu Herói: "))
if xpHeroi < 1000:
    nivelHeroi = "Ferro"
    print(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")
elif xpHeroi >= 1001 and xpHeroi <= 2000:
    nivelHeroi = "Bronze"
    print(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")
elif xpHeroi >= 2001 and xpHeroi <= 3000:
    nivelHeroi = "Prata"
    print(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")
elif xpHeroi >= 3001 and xpHeroi <= 4000:
    nivelHeroi = "Ouro"
    print(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")
elif xpHeroi >= 4001 and xpHeroi <= 5000:
    nivelHeroi = "Platina"
    print(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")
elif xpHeroi >= 5001 and xpHeroi <= 6000:
    nivelHeroi = "Ascendente"
    print(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")
elif xpHeroi >= 6001 and xpHeroi <= 7000:
    nivelHeroi = "Imortal"
    print(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")
elif xpHeroi >= 7001:
    nivelHeroi = "Radiante"
    print(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")
else:
    print("Nível inválido")