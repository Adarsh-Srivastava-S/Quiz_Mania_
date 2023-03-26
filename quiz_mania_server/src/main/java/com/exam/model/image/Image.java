package com.exam.model.image;


import com.exam.model.User;
import com.exam.model.leaderboard.Leaderboard;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Objects;

@Entity
@Table(name = "image", uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id"})})

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Image implements Serializable {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "image", unique = false, nullable = false, length = 100000)
    private byte[] image;
    @OneToOne(mappedBy = "image")
    @JsonIgnore
    Leaderboard leaderboard;

    @OneToOne
            @JoinColumn(name = "user_id",unique = true)
    @JsonIgnoreProperties("image")
            @JsonIgnore


    User user;
    @Override
    public int hashCode() {
        return Objects.hash(id, name, type, Arrays.hashCode(image));
    }
}