#include <sys/socket.h>
#include <stdio.h>
#include<unistd.h>
#include <arpa/inet.h>
#include <string.h>

int main(void){
    int rc = 0;
    struct sockaddr_in bind_addr;
   int ret = 0;
   int tcp_socket = 0;
   int client_socket = 0;
    memset(&bind_addr, 0, sizeof(bind_addr));

     tcp_socket = socket(AF_INET, SOCK_STREAM, 0);

    if(tcp_socket < 0){
    perror("socket()");
    return 1;
}
 

printf("socket creation succeeded\n");

   

        bind_addr.sin_port = htons(8080);
        bind_addr.sin_family = AF_INET;
        bind_addr.sin_addr.s_addr = INADDR_ANY;

    rc = bind(tcp_socket,(const struct sockaddr*)&bind_addr, sizeof(bind_addr));
    if(rc <0 ){
        perror("bind()");
        return 1;
    }
    printf("bind succeeded\n");

    


    rc = listen(tcp_socket,SOMAXCONN );
    if(rc < 0){
        perror("listen()");
        goto exit;
    }
    printf("listen succeeded\n");

printf("waiting for connection...\n");
     client_socket = accept(tcp_socket,NULL, NULL );

    printf("got a connection!\n");

    exit:
    close(tcp_socket);
    return ret;
};

