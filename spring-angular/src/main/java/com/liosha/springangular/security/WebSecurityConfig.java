package com.liosha.springangular.security;

import com.liosha.springangular.security.jwt.AuthEntryPointJwt;
import com.liosha.springangular.security.jwt.AuthTokenFilter;
import com.liosha.springangular.security.services.UserDetailsServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

@Configuration
@EnableMethodSecurity
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(
		// securedEnabled = true,
		// jsr250Enabled = true,
		//prePostEnabled = true)
public class WebSecurityConfig {// extends WebSecurityConfigurerAdapter {
	@Autowired
	UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	@Bean
	public AuthTokenFilter authenticationJwtTokenFilter() {
		return new AuthTokenFilter();
	}

//	@Override
//	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//		authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//	}

	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

		authProvider.setUserDetailsService(userDetailsService);
		authProvider.setPasswordEncoder(passwordEncoder());

		return authProvider;
	}

//	@Bean
//	@Override
//	public AuthenticationManager authenticationManagerBean() throws Exception {
//		return super.authenticationManagerBean();
//	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
		return authConfig.getAuthenticationManager();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http
//				.csrf()
//                .disable()
//				.exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
//                .authorizeRequests()
//
//
//                    // //Доступ только для пользователей с ролью Администратор
//					//.antMatchers("/api/users").hasRole("ADMIN")
//                    // .antMatchers("/news").hasRole("USER")
//                    //Доступ разрешен всем пользователей
//                    .antMatchers("/*", "/home", "/resources/**").permitAll()
//					.antMatchers("/api/auth/**").permitAll()
//					.antMatchers("/api/tutorials").permitAll()
//					.antMatchers("/api/tutorials/**").permitAll()
//					//.antMatchers("/api/test/**").permitAll()
//                //Все остальные страницы требуют аутентификации
//                .anyRequest().authenticated()
//				.and()
//				.sessionManagement()
//				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//				.and()
//				.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
//
//
//		//http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
//	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())
				.exceptionHandling(exception -> exception.authenticationEntryPoint(unauthorizedHandler))
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(auth ->
						auth.requestMatchers("/api/auth/**").permitAll()
								.requestMatchers("/*", "/home", "/resources/**").permitAll()
								.requestMatchers("/api/test/**").permitAll()
								.requestMatchers("/api/tutorials").permitAll()

								.requestMatchers("api/users").permitAll()
								.requestMatchers("api/users/**").permitAll()

								.requestMatchers("api/roles").permitAll()
								.requestMatchers("api/roles/**").permitAll()

								.requestMatchers("/api/tutorials/**").permitAll()
								.anyRequest().authenticated()
				);

		http.authenticationProvider(authenticationProvider());

		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}
}
