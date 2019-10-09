function FindProxyForURL(url, host) {

    if (shExpMatch(host, "slack.com") ||
        shExpMatch(host, "*.slack.com") ||
        shExpMatch(host, "*.slack-msgs.com") ||
        shExpMatch(host, "*.slack-files.com") ||
        shExpMatch(host, "*.slack-imgs.com") ||
        shExpMatch(host, "*.slack-edge.com") ||
        shExpMatch(host, "*.slack-core.com") ||
        shExpMatch(host, "*.slack-redir.net") ||
        shExpMatch(host, "dropbox.com") ||
        shExpMatch(host, "*.dropbox.com")) {
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8888 [user]@[server]
        return "SOCKS 127.0.0.1:8888; DIRECT";
    }

    return "DIRECT";
}
