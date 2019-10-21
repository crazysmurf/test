function FindProxyForURL(url, host) {

    // Slack domains
//    if (shExpMatch(host, "slack.com") ||
//        shExpMatch(host, "*.slack.com") ||
//        shExpMatch(host, "*.slack-msgs.com") ||
//        shExpMatch(host, "*.slack-files.com") ||
//        shExpMatch(host, "*.slack-imgs.com") ||
//        shExpMatch(host, "*.slack-edge.com") ||
//        shExpMatch(host, "*.slack-core.com") ||
//        shExpMatch(host, "*.slack-redir.net")) {
//        // Use SOCK proxy, or fall back to a DIRECT traffic.
//        // ssh -D 8888 [user]@[server]
//        return "SOCKS 127.0.0.1:8888; DIRECT";
//    }

    // dropbox domains
    if (shExpMatch(host, "dropbox.com") ||
        shExpMatch(host, "*.dropbox.com") ||
        shExpMatch(host, "*.dropboxusercontent.com") ||
        shExpMatch(host, "db.tt") ||
        shExpMatch(host, "*.dropboxapi.com") ||
        shExpMatch(host, "*.dropboxbusiness.com") ||
        shExpMatch(host, "*.dropboxcaptcha.com") ||
        shExpMatch(host, "*.dropboxforums.com") ||
        shExpMatch(host, "*.dropboxforum.com") ||
        shExpMatch(host, "*.dropboxinsiders.com") ||
        shExpMatch(host, "*.dropboxmail.com") ||
        shExpMatch(host, "*.dropboxpartners.com") ||
        shExpMatch(host, "*.dropboxstatic.com") ||
        shExpMatch(host, "*.dropbox.zendesk.com") ||
        shExpMatch(host, "*.getdropbox.com") ||
        shExpMatch(host, "*.dropbox-dns.com") ||
        shExpMatch(host, "cdn.arkoselabs.com") ||
        shExpMatch(host, "dropbox-api.arkoselabs.com") ||
        shExpMatch(host, "*.dropbox-dns.com")) {
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8888 [user]@[server]
        return "SOCKS 127.0.0.1:8888; DIRECT";
    }

    return "DIRECT";
}
