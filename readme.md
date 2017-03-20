# Projekt herunterladen und ausführen

Bitte prüfen Sie, ob Sie per git und npm dieses Seed-Projekt herunterladen und ausführen können:

```
git clone <Diese Url>
cd <Projektname>
npm install
npm start
// ein wenig warten
// Unter http://localhost:8081 sollte nun "Hallo Welt!" zu finden sein
```

Nachfolgend finden Sie Lösungen für typische Probleme.

# Weitere Infos

- Änderungen herunterladen: ``git pull``

# Probleme beim Starten

Falls Port 8081 bei Ihnen schon belegt ist, können Sie in der Datei config/webpack.dev.js durch anpassen der Variable PORT ein anderes Port festlegen.

# Probleme beim Herunterladen

Bei Problemen sollte man die Proxy-Einstellung oder die Proxy-Konfiguration prüfen.

Ggf. kann man die Probleme auch lokal lösen. Um lokal den Proxy für npm zu setzen geht man wie folgt vor:

```
npm config set proxy [http|https]://[proxy-address]:[port]
npm config set https-proxy [http|https]://[proxy-address]:[port]
```

Analog geht man für git vor:

```
git config --global http.proxy [http|https]://[proxy-address]:[port]
```

Benutzername und Passwort für den Proxy können auch direkt in die Url aufgenommen werden:

```
[http|https]://[username]:[passwort]@[proxy-address]:[port]
```

Alternativ dazu können diese Informationen auch in den Konfigurationsdateien von npm und git eingetragen werden. Infos dazu finden sich in den Dokumentationen dieser beide Produkte.

# Falls Sie diese Readme VOR einem Training verwenden:

- Vergessen Sie bitte nicht, die nötigen Befehle inkl. Proxy-Einstellungen an alle Teilnehmer weiterzugeben.
- Falls Sie eventuelle Probleme vor dem Termin nicht lösen können, geben Sie mir bitte kurz bescheid. In diesem Fall können wir auf andere Lösungen ausweichen (z. B. zips per ftp).

# Credits

- https://github.com/AngularClass/angular2-webpack-starter
- https://github.com/angular/angular2-seed
